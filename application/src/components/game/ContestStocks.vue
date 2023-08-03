<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia'
import IconCurrency from '@/components/icons/IconCurrency.vue'
import IconUp from '@/components/icons/IconUp.vue'
import IconDown from '@/components/icons/IconDown.vue'
import JoinGame from '@/components/game/JoinGame.vue'
import { useGamePlayStore } from '@/stores/gamePlayStore';
import { watch, ref, onBeforeMount } from 'vue';
import { API, graphqlOperation } from 'aws-amplify'
import { listContestStockFeeds, listContestStocks, } from '@/graphql/queries';
import type { GraphQLSubscription } from '@aws-amplify/api';
import type { OnUpdateContestStockFeedSubscription } from '@/API';
import * as subscriptions from '@/graphql/subscriptions';
import { formatAmount } from '@/utils/utility';


const userStore = useUserStore();
const selectedStock = ref('BTC');
const betType = ref('B');
const { userInfo } = storeToRefs(userStore)
const gamePlayStore = useGamePlayStore();
const { investOrWithdraw } = useGamePlayStore();
const { contestId, participantDetails, calculateInvestedAmount, CRYPTO_BTC, CRYPTO_DOGE, CRYPTO_SOL, CRYPTO_ETH, CRYPTO_XRP } = storeToRefs(gamePlayStore)

interface StocksRow {
  stockId: string,
  stockCode: string,
  stockDescription: string,
  stockImage: string,
  stockPrice: number,
  stockGain: number
}

const currentStocksList = ref<Array<StocksRow>>([]);

watch(contestId, (newContestId, oldContestId) => {
  if (newContestId !== oldContestId && newContestId != '') {
    getCurrentStocks(newContestId);
    getCurrentFeed(contestId.value);
  }
});

const subscription = async () => {
  const sub = API.graphql<GraphQLSubscription<OnUpdateContestStockFeedSubscription>>(graphqlOperation(subscriptions.onUpdateContestStockFeed)).subscribe({
    next: ({ provider, value }) => {
      if (value.data) {
        const stockFeed: any = value.data.onUpdateContestStockFeed;
        console.log("stockFeed", stockFeed);
        const stockDataObject: any = JSON.parse(stockFeed.stockFeed);
        CRYPTO_BTC.value = stockDataObject.BTC;
        CRYPTO_DOGE.value = stockDataObject.DOGE;
        CRYPTO_SOL.value = stockDataObject.SOL;
        CRYPTO_ETH.value = stockDataObject.ETH;
        CRYPTO_XRP.value = stockDataObject.XRP;
      }
      console.log({ provider, value })
    },
    error: (error) => console.warn(error)
  });
}

const getCurrentStocks = async (contestId: string) => {
  try {
    const existingStocks: any = await API.graphql(graphqlOperation(listContestStocks, { filter: { "contestContestStockId": { "eq": contestId } } }));
    if (existingStocks && existingStocks.data && existingStocks.data.listContestStocks && existingStocks.data.listContestStocks.items && existingStocks.data.listContestStocks.items.length > 0) {
      const stockList: StocksRow[] = existingStocks.data.listContestStocks.items.map((stock: any) => ({
        stockId: stock.id,
        stockCode: stock.stockCode,
        stockDescription: stock.stockDescription,
        stockImage: stock.stockImage,
        stockPrice: stock.stockPrice,
        stockGain: 0
      }));
      currentStocksList.value = stockList;
      console.log("existingStocks.data.listContestStocks.items", existingStocks.data.listContestStocks.items);
    } else {
      console.log("No Stocks found")
    }
  } catch (error) {
    console.log("Error in fetching stocks list", error);
  }
  subscription();
}


const getCurrentFeed = async (contestId: string) => {
  try {
    const existingFeed: any = await API.graphql(graphqlOperation(listContestStockFeeds, { filter: { "contestContestStockFeedId": { "eq": contestId } } }));
    if (existingFeed && existingFeed.data && existingFeed.data.listContestStockFeeds && existingFeed.data.listContestStockFeeds.items && existingFeed.data.listContestStockFeeds.items.length > 0) {
      const stockFeed: any = existingFeed.data.listContestStockFeeds.items[0];
      console.log("stockFeed", stockFeed);
      const stockDataObject: any = JSON.parse(stockFeed.stockFeed);
      CRYPTO_BTC.value = stockDataObject.BTC;
      CRYPTO_DOGE.value = stockDataObject.DOGE;
      CRYPTO_SOL.value = stockDataObject.SOL;
      CRYPTO_ETH.value = stockDataObject.ETH;
      CRYPTO_XRP.value = stockDataObject.XRP;
      console.log("FEEEEEEEEEEEEEEEEDDDDD FOUND")
    } else {
      console.log("No Stock Feed found")
    }
  } catch (error) {
    console.log("Error in fetching stocks feed", error);
  }
  subscription();

}

onBeforeMount(() => {
  if (contestId.value != '') {
    getCurrentStocks(contestId.value);
    getCurrentFeed(contestId.value);
  }
});

watch(participantDetails.value, (newValue, oldValue) => {
  console.log("participants updated", newValue, oldValue)
});
</script>
<template>
  <div class="navbar bg-base-300">
    <span class="normal-case text-xl font-bold ml-5">Contest Stocks</span>
  </div>
  <article class="prose dark:prose-invert pl-7">
    Realtime Stock Feed from cryptocompare.com
  </article>
  <div class="overflow-x-none">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Stock & Market Price</th>
          <th>Price Movement <br />(since contest start)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in currentStocksList">
          <th>
            <label v-if="userInfo.userId != '' && participantDetails.id != ''">
              <input type="radio" name="stock" class="radio" v-model="selectedStock" :value="stock.stockCode" />
            </label>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img v-if="stock.stockCode == 'BTC'" src="@/assets/bitcoin.png" alt="Bitcoin Icon" />
                  <img v-if="stock.stockCode == 'DOGE'" src="@/assets/doge.png" alt="Doge Coin Icon" />
                  <img v-if="stock.stockCode == 'ETH'" src="@/assets/ethereum.png" alt="Ethereum Icon" />
                  <img v-if="stock.stockCode == 'SOL'" src="@/assets/solana.png" alt="Solana Icon" />
                  <img v-if="stock.stockCode == 'XRP'" src="@/assets/xrp.png" alt="Ripple Icon" />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ stock.stockDescription }} - {{ stock.stockCode }}</div>
                <div class="badge badge-accent badge-ghost p-4">
                  <IconCurrency />{{
                    (stock.stockCode == 'BTC' ? CRYPTO_BTC : stock.stockCode == 'ETH' ? CRYPTO_ETH : stock.stockCode ==
                      'SOL' ? CRYPTO_SOL : stock.stockCode == 'XRP' ? CRYPTO_XRP : CRYPTO_DOGE).toFixed(4)
                  }}
                </div>
              </div>
            </div>
          </td>
          <th>
            <div class="badge badge-outline badge-sm p-4"
              :class="((stock.stockCode == 'BTC' ? CRYPTO_BTC : stock.stockCode == 'ETH' ? CRYPTO_ETH : stock.stockCode == 'SOL' ? CRYPTO_SOL : stock.stockCode == 'XRP' ? CRYPTO_XRP : CRYPTO_DOGE) - stock.stockPrice) >= 0 ? 'badge-accent' : 'badge-secondary'">
              <IconCurrency />{{
                ((stock.stockCode == 'BTC' ? CRYPTO_BTC : stock.stockCode == 'ETH' ? CRYPTO_ETH : stock.stockCode == 'SOL' ?
                  CRYPTO_SOL : stock.stockCode == 'XRP' ? CRYPTO_XRP : CRYPTO_DOGE) - stock.stockPrice).toFixed(4)
              }}
              <IconUp
                v-if="((stock.stockCode == 'BTC' ? CRYPTO_BTC : stock.stockCode == 'ETH' ? CRYPTO_ETH : stock.stockCode == 'SOL' ? CRYPTO_SOL : stock.stockCode == 'XRP' ? CRYPTO_XRP : CRYPTO_DOGE) - stock.stockPrice) > 0" />
              <IconDown
                v-if="((stock.stockCode == 'BTC' ? CRYPTO_BTC : stock.stockCode == 'ETH' ? CRYPTO_ETH : stock.stockCode == 'SOL' ? CRYPTO_SOL : stock.stockCode == 'XRP' ? CRYPTO_XRP : CRYPTO_DOGE) - stock.stockPrice) < 0" />
            </div>
          </th>
        </tr>
      </tbody>
    </table>
    <JoinGame />
    <div v-if="userInfo.userId != '' && participantDetails.id != ''">
      <div class="divider font-extrabold">Make your investment choice</div>
      <table class="table">
        <tbody>
          <tr>
            <th>Current Balance <div class="badge badge-accent badge-ghost p-4">
                <IconCurrency /> {{ formatAmount(participantDetails.balanceAmount) }}
              </div>
            </th>
            <th>Invested Amount <div class="badge badge-accent badge-ghost p-4">
                <IconCurrency />{{ formatAmount(participantDetails.stockUnitBuyPrice * participantDetails.stockUnits) }}
              </div>
            </th>
            <th v-if="participantDetails.stockCode != ''">Current P/L <div class="badge badge-accent badge-ghost p-4">
                <IconCurrency />{{ calculateInvestedAmount }}
              </div>
            </th>
          </tr>
          <tr v-if="participantDetails.stockCode != ''">
            <th colspan="3">
              You Bought: <div class="badge badge-accent badge-ghost p-4">
                {{ participantDetails.stockCode }} - {{ participantDetails.betType == 'S' ? 'Sell' : 'Buy' }}, for units:
                {{
                  formatAmount(participantDetails.stockUnits) }} @
                <IconCurrency /> {{ formatAmount(participantDetails.stockUnitBuyPrice) }}/unit
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      <div class="grid grid-cols-2 mx-10 content-center justify-center gap-2">
        <div class="form-control justify-self-start" v-if="participantDetails.balanceAmount != 0">
          <label class="label cursor-pointer">
            <input type="radio" v-model="betType" class="radio checked:bg-red-500" value="S" />
            <span class="label-text ml-3 font-extrabold"> Sell</span>
          </label>
        </div>
        <div class="form-control justify-self-start" v-if="participantDetails.balanceAmount != 0">
          <label class="label cursor-pointer">
            <input type="radio" v-model="betType" class="radio checked:bg-blue-500" value="B" />
            <span class="label-text  ml-3 font-extrabold">Buy</span>
          </label>
        </div>
        <div class="content-center col-span-2" v-if="participantDetails.balanceAmount != 0">
          <button class="btn btn-accent btn-sm justify-center w-full"
            @click="investOrWithdraw('I', selectedStock, betType)">Invest</button>
        </div>
        <div class="content-center col-span-2" v-if="participantDetails.balanceAmount == 0">
          <button class="btn btn-accent btn-sm justify-center w-full" @click="investOrWithdraw('W', '', '')">Withdraw
            Investment</button>
        </div>
      </div>
      <article class="prose pl-7 text-lg pt-4" v-if="participantDetails.balanceAmount != 0">
        Notes:
      </article>
      <article class="prose dark:prose-sm pl-7 italic" v-if="participantDetails.balanceAmount != 0">
        <ul>
          <li>Buy implies that if stock price goes up, so does your investment.</li>
          <li>Sell implies that if stock price goes down, so will your investment (this is called short selling).</li>
        </ul>
      </article>
    </div>
  </div>
</template>