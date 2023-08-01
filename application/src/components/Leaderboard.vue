<script setup lang="ts">
import CurrentLeaderboard from '../components/CurrentLeaderboard.vue';
</script>
<template>
<div class="navbar bg-base-300">
  <span class="normal-case text-xl font-bold">LeaderBoard</span>
</div>
<article class="prose dark:prose-invert pl-2">
  Welcome to the game leaderboard
</article>
<div class="tabs">
        <a class="tab tab-lg tab-lifted tab-active">Current Game</a>
        <a class="tab tab-lg tab-lifted ">Last 7 days</a>
        <a class="tab tab-lg tab-lifted">Last 30 days</a>
</div>
<CurrentLeaderboard/>
</template>