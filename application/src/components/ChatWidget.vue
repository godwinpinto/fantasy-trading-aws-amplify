<script setup lang="ts">
import type { UserInfo } from '@/stores/userStore';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia'
import { useGamePlayStore } from '@/stores/gamePlayStore';
import { onMounted, watch, ref } from 'vue';
import { API, graphqlOperation } from 'aws-amplify'
import { listMessages } from '@/graphql/queries';
import { onCreateMessage } from '@/graphql/subscriptions';
import type { GraphQLSubscription } from '@aws-amplify/api';
import type { OnCreateMessageSubscription } from '@/API';
import * as subscriptions from '@/graphql/subscriptions';
import { createMessage, createUser } from './../graphql/mutations';


const userStore = useUserStore();
const scrollChat = ref<HTMLElement | null>(null);

const { userInfo } = storeToRefs(userStore)

const gamePlayStore = useGamePlayStore();

const { contestId } = storeToRefs(gamePlayStore)

interface user {
    id: string,
    username: string
}

interface message {
    message: string,
    user: user,
    createdAt: string
}

const newMessage = ref('');

const messages = ref<Array<message>>([]);

const scrollChatToBottom=()=>{
    setTimeout(() => {
                    if (scrollChat.value) {
                        console.log("scroll");
                        const element = scrollChat.value.lastElementChild;
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'end' })
                        
                        } else {
                console.log("not scroll");
            }

        }}, 500);

}    

const subscription = async () => {

    const sub = API.graphql<GraphQLSubscription<OnCreateMessageSubscription>>(graphqlOperation(subscriptions.onCreateMessage)).subscribe({
        next: ({ provider, value }) => {
            if (value.data) {
                const messageDetails = value.data.onCreateMessage;
                console.log("messageDetails",messageDetails)
                const val = {
                    message: messageDetails?.message ?? '',
                    user: messageDetails?.user ?? { id: '', username: '' },
                    createdAt: messageDetails?.createdAt ?? ''
                }

                messages.value.push(val);
                scrollChatToBottom();

    }
            console.log({ provider, value })
        },
    error: (error) => console.warn(error)
    });
}


watch(contestId, (newContestId, oldContestId) => {
    if (newContestId !== oldContestId && newContestId != '') {
        getContestMessages(newContestId);
    }
});

const getContestMessages = async (contestId: string) => {
    console.log("calling message Api")
    try {
        const existingMessages: any = await API.graphql(graphqlOperation(listMessages, { filter: { "contestMessageId": { "eq": contestId } }, limit: 10 }));
        console.log("existingMessages.data.listMessages.items===", existingMessages.data.listMessages.items);

        if (existingMessages && existingMessages.data && existingMessages.data.listMessages && existingMessages.data.listMessages.items && existingMessages.data.listMessages.items.length>0) {
            
            const arrayMessages=existingMessages.data.listMessages.items;
            arrayMessages.forEach((messagess: any) => {
                console.log("message",messagess.user)
                const userr=messagess.user;
                console.log("userr.id",userr.id)
                const newMessage:message={
                    message:messagess.message,
                    user:{
                        "id": messagess.user.id,
                        "username":messagess.user.username,
                    },
                    createdAt:messagess.createdAt
                }
                messages.value.push(newMessage);
    
                });


            scrollChatToBottom();
        }
    } catch (error) {
        console.log("Error in fetching messages", error);
    }
    subscription();
}

const sendMessage = async () => {
    const messageContent = newMessage.value;
    console.log("called sendMessage", messageContent);
    if (messageContent == "")
        return
    const currentUTCDate = new Date().toISOString();
    try {
        const variables = {
            "message": newMessage.value,
            "contestMessageId": contestId.value,
            "userMessageId": userInfo.value.userId,
            "msgDateTime": currentUTCDate
        };
        const creationDetails: any = await API.graphql({
            query: createMessage,
            variables: { input: variables }
        });
        newMessage.value = ''
    } catch (error) {
        console.log("cannot send new message", error);
    }
}

if(contestId.value!=''){
    getContestMessages(contestId.value);
}

onMounted(() => {
    //gamePlayStore.createMessageRecord("","");
})


</script>

<template>
    <div class="navbar bg-base-300 mb-0 pb-0">
        <span class="normal-case text-xl font-bold">Gameplay Chat</span>
    </div>
    <div class="divider my-0"></div>

    <div class=" flex flex-col">
        <div class="flex-col overflow-y-scroll flex mb-7" style="height:39rem" ref="scrollChat">
            <div v-for="message in messages" class="chat"
                :class="userInfo.userId==message.user.id  ? 'chat-end' : 'chat-start'">
                <div class="chat-header">
                    {{ message.user.username }}
                    <!-- <time class="text-xs opacity-50">2 hours ago</time> -->
                </div>
                <div class="chat-bubble">{{ message.message }}</div>
            </div>
        </div>
        <div class="flex p-2 space-x-2" v-if="userInfo.userId != ''">
            <div class="flex-1">
                <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full"
                    v-model="newMessage" v-on:keyup.enter="sendMessage" />
            </div>
            <div class="flex-none h-14 w-14">
                <button class="btn bg-white btn-ghost" @click="sendMessage">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>

                </button>
            </div>

        </div>
    </div>
</template>

