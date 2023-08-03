<script setup lang="ts">
import Leaderboard from '@/components/TheLeaderboard.vue';
import NavBar from '../components/NavBar.vue';
import TheWelcome from '../components/TheWelcome.vue'
import ChatWidget from '@/components/ChatWidget.vue'
import ContestStocks from '../components/ContestStocks.vue';
import TheLogin from '@/components/TheLogin.vue';

import type { UserInfo } from '@/stores/userStore';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from "vue";

const userStore=useUserStore();
const isAuthSetTried=ref(false);
const { userInfo } = storeToRefs(userStore)
const { asyncSetUser }=useUserStore();

onBeforeMount(() => {
    asyncSetUser().then(()=>{
      isAuthSetTried.value=true;
    });
});
</script>

<template>
  <NavBar/>
  <main>

<div class="flex flex-col bg-base-300" v-if="isAuthSetTried">
  <div class="flex-1 flex flex-col sm:flex-row">
    <main class="flex-1">
      <Leaderboard/>
    </main>

    <nav class="order-first sm:w-1/4">
      <ContestStocks/>
      <TheLogin/>
    </nav>

    <aside class="sm:w-1/4 ">
      
      <ChatWidget/>
    </aside>
  </div>

</div>
<!--     <TheWelcome /> -->
  </main>
</template>
