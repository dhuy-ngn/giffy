<!--
  * Filename: HomeView.vue
  * Author: Huy Nguyen
  * Date: December 25, 2023
  * Description: Contains the implementation of the Home page, consisting a search bar and a gif-list that contains current trending gifs
-->

<script setup lang="ts">
  import GifList from '@/components/gifs/GifList.vue';
  import SearchComponent from '@/components/search/SearchComponent.vue';
</script>

<template>
  <main>
    <div class="flex flex-col justify-center items-center gap-y-12 mt-20">
      <p
        class="bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold font-mono text-transparent"
      >
        Ready to discover your next favorite GIF?
      </p>
      <search-component />
      <span class="text-gray-100 font-mono text-xl"
        >...or see what is
        <span
          class="font-mono text-xl bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Trending <i class="fa-solid fa-fire"></i>
        </span>
      </span>

      <gif-list search-type="trending" />
    </div>
  </main>
</template>
