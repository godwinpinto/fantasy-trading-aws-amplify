<script setup lang="ts">

import type { UserInfo } from '@/stores/userStore';
import { computed, onBeforeMount } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia'
import { useGamePlayStore } from '@/stores/gamePlayStore';
import { onMounted, watch, ref } from 'vue';
import { API, graphqlOperation } from 'aws-amplify'
import { listMessages, listParticipants } from '@/graphql/queries';
import { onCreateMessage } from '@/graphql/subscriptions';
import type { GraphQLSubscription } from '@aws-amplify/api';
import type { OnCreateParticipantSubscription, OnUpdateParticipantSubscription, OnUpdateParticipantSubscriptionVariables } from '@/API';
import * as subscriptions from '@/graphql/subscriptions';
import { createMessage, createUser } from './../graphql/mutations';
import IconCurrency from '../components/icons/IconCurrency.vue';
import {formatAmount,calculateProfitOrLoss} from '../stores/utility';



const userStore = useUserStore();
const scrollChat = ref<HTMLElement | null>(null);

const { userInfo } = storeToRefs(userStore)

const gamePlayStore = useGamePlayStore();

const { contestId, participantDetails, joinedStatus,CRYPTO_BTC, CRYPTO_DOGE, CRYPTO_SOL, CRYPTO_ETH, CRYPTO_XRP } = storeToRefs(gamePlayStore)




interface LeaderboardRow {
  userId: string,
  profileImage: string,
  username: string,
  stockCode: string,
  balanceAmount: number,
  stockUnitBuyPrice: number,
  stockUnits: number,
  betType: 'S'|'B',
}

const currentLeaderboardList = ref<Array<LeaderboardRow>>([]);


const dummyObject = [
  {
    userId: "1",
    profileImage: "https://lh3.googleusercontent.com/a/AAcHTtf8Hd6zwJ7YUL-Vn3mZp-ku6lHrZmaUSyRL0SQaygBSyA=s96-c",
    username: "Godwin Pinto",
    totalBalance: 100000.89,
    rank: 1,
    status: "H"
  },
  {
    userId: "2",
    profileImage: "https://lh3.googleusercontent.com/a/AAcHTtf8Hd6zwJ7YUL-Vn3mZp-ku6lHrZmaUSyRL0SQaygBSyA=s96-c",
    username: "Ramesh Suresh",
    totalBalance: 99999.89,
    rank: 2,
    status: "I"
  }
];

//currentLeaderboardList.value = dummyObject;

const subscription = async () => {

  const sub = API.graphql<GraphQLSubscription<OnCreateParticipantSubscription>>(graphqlOperation(subscriptions.onCreateParticipant)).subscribe({
    next: ({ provider, value }) => {
      if (value.data) {
        const participantDetails: any = value.data.onCreateParticipant;
        const val = {
          userId: participantDetails.user.id,
          profileImage: participantDetails.user.profileImage,
          username: participantDetails.user.username,
          balanceAmount: participantDetails.balanceAmount,
          betType: participantDetails.betType,
          stockCode: participantDetails.stockCode,
          stockUnitBuyPrice: participantDetails.stockUnitBuyPrice,
          stockUnits: participantDetails.stockUnits
        }
        currentLeaderboardList.value.push(val);
      }
      console.log({ provider, value })
    },
    error: (error) => console.warn(error)
  });
}


const subscriptionUpdate = async () => {

const sub = API.graphql<GraphQLSubscription<OnUpdateParticipantSubscription>>(graphqlOperation(subscriptions.onUpdateParticipant)).subscribe({
  next: ({ provider, value }) => {
    console.log("NEW UPDATE MESSAGE",value)
    if (value.data) {
      const participantDetails: any = value.data.onUpdateParticipant;

      const newArray=currentLeaderboardList.value;

      for(let i=0;i<newArray.length;i++){
        const item=newArray[i];
        if(item.userId==participantDetails.user.id){
          const val = {
        userId: participantDetails.user.id,
        profileImage: participantDetails.user.profileImage,
        username: participantDetails.user.username,
        balanceAmount: participantDetails.balanceAmount,
        betType: participantDetails.betType,
        stockCode: participantDetails.stockCode,
        stockUnitBuyPrice: participantDetails.stockUnitBuyPrice,
        stockUnits: participantDetails.stockUnits
      }
      currentLeaderboardList.value[i]=val;
      break;
      }
    }

      }
    console.log({ provider, value })
  },
  error: (error) => console.warn(error)
});
}

watch(contestId, (newContestId, oldContestId) => {
  if (newContestId !== oldContestId && newContestId != '') {
    getCurrentLeaderboard(newContestId);
  }
});

const getCurrentLeaderboard = async (contestId: string) => {
  console.log("something here");
  try {
    const existingParticipants: any = await API.graphql(graphqlOperation(listParticipants, { filter: { "contestParticipantsId": { "eq": contestId } }, limit: 20 }));
    if (existingParticipants && existingParticipants.data && existingParticipants.data.listParticipants && existingParticipants.data.listParticipants.items && existingParticipants.data.listParticipants.items.length > 0) {

      const userList: LeaderboardRow[] = existingParticipants.data.listParticipants.items.map((participant: any) => {
        console.log("userInfo.value.userId", userInfo.value.userId);
        if (participant.user.id == userInfo.value.userId) {
          participantDetails.value = participant;
          console.log("participantDetails.value", participantDetails.value);
          joinedStatus.value = true;
        }

        return ({
          userId: participant.user.id,
          profileImage: participant.user.profileImage,
          username: participant.user.username,
          balanceAmount: participant.balanceAmount,
          betType: participant.betType,
          stockCode: participant.stockCode,
          stockUnitBuyPrice: participant.stockUnitBuyPrice,
          stockUnits: participant.stockUnits
        }) as LeaderboardRow
      });


      currentLeaderboardList.value = userList;



      console.log("existingMessages.data.listMessages.items", existingParticipants.data.listParticipants.items);
    } else {
      console.log("No users in leaderboard")
    }
  } catch (error) {
    console.log("Error in fetching messages", error);
  }
  subscription();
  subscriptionUpdate();
}

onBeforeMount(() => {
  if (contestId.value != '') {
    getCurrentLeaderboard(contestId.value);
  }
});



const computerLeaderboard = computed(() => {
  return currentLeaderboardList.value.map((item) => {
    let balanceAmount=0;
    if(item.balanceAmount!=0){
      balanceAmount=item.balanceAmount;
    }else{
      balanceAmount=item.stockUnitBuyPrice*item.stockUnits+calculateProfitOrLoss(item.betType,item.stockUnitBuyPrice,(item.stockCode=='BTC'?
      CRYPTO_BTC.value:item.stockCode=='ETH'?
      CRYPTO_ETH.value:item.stockCode=='SOL'?
      CRYPTO_SOL.value:item.stockCode=='XRP'?
      CRYPTO_XRP.value:CRYPTO_DOGE.value),item.stockUnits)
  }
    return ({
    ...item,
    balance:  balanceAmount,
  })}).sort((a, b) => b.balance - a.balance);
})


</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>
            Rank
          </th>
          <th>User</th>
          <th>Current Investment</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody v-auto-animate>
        <!-- row 1 -->
        <tr v-for="(user,index) in computerLeaderboard" :key="user.userId">
          <td>
            {{index+1}}
          </td>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="user.profileImage" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>

              <div>
                <div class="font-bold">{{ user.username }}</div>
                <div class="text-sm opacity-50"></div>
              </div>
            </div>
          </td>
          <td>
            <div>
              <div class="badge badge-accent badge-outline badge-ghost p-4">
                <IconCurrency /> {{ formatAmount(user.balance) }}
              </div>
            </div>
          </td>
          <td>{{ user.balanceAmount != 0 ? "Hold" : "Invested" }}</td>
        </tr>
      </tbody>

    </table>
    <article class="prose pl-7 text-lg pt-4">
      Notes:
    </article>
    <article class="prose dark:prose-sm pl-7 italic">
      <ul>
        <li><span class="font-bold">Hold</span>: means not invested in any stock at the moment</li>
        <li><span class="font-bold">Invested</span>: means invested in a stock at the moment</li>
      </ul>

    </article>

  </div>
</template>