<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import RandomNumberGenerator from "./components/RandomNumberGenerator.vue";
</script>

<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <h1 class="text-3xl font-bold mb-6 text-center text-green-700">Number generator</h1>
      <RandomNumberGenerator :min="0" :max="100" />
    </div>

  </div>
</template>

<style scoped>

</style>
