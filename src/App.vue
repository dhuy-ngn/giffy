<script setup lang="ts">
  import '@/style.css';
  import { RouterView } from 'vue-router';
  import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-900 min-w-[1280px]">
    <NavigationBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
