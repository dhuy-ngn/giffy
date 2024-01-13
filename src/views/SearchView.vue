<!--
  * Filename: SearchView.vue
  * Author: Huy Nguyen
  * Date: December 25, 2023
  * Description: Contains the implementation of the Search results page
-->

<template>
  <div class="flex flex-col justify-center items-center mt-20 gap-12">
    <search-component />
    <p class="text-md text-gray-200 font-mono">
      Your search results for
      <span class="font-bold">
        {{ searchTerm }}
      </span>
    </p>
    <gif-list search-type="search" />
  </div>
</template>

<script setup lang="ts">
  import GifList from '@/components/gifs/GifList.vue';
  import SearchComponent from '@/components/search/SearchComponent.vue';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const searchTerm = ref<String>();

  onMounted(() => {
    searchTerm.value = route.query.q?.toString() || '';
  });
</script>

<style scoped></style>
