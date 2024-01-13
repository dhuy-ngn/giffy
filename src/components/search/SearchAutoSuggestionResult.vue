<!--
  * Filename: SearchAutoSuggestionResult.vue
  * Author: Huy Nguyen
  * Date: January 01, 2024
  * Description: Contains the implementation of the auto-suggest item that displays when user type into the search bar
-->

<template>
  <!--Bold the word on the search bar-->
  <button
    class="font-mono hover:underline"
    @click="onAutoSuggestionClick"
  >
    <span class="font-bold">{{ props.searchTerm }}</span>
    <span>{{
      props.suggestion.replace(props.searchTerm.toLowerCase(), '')
    }}</span>
  </button>
</template>

<script setup lang="ts">
  import type { SearchQuery } from '@/types/SearchQuery';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const searchQueryState = ref<SearchQuery>({
    searchType: 'search',
    q: '',
    limit: 40,
    rating: 'g',
    offset: 0
  });

  const props = defineProps({
    searchTerm: {
      type: String,
      required: true
    },
    suggestion: {
      type: String,
      required: true
    }
  });

  const router = useRouter();

  // Route to search page with the search suggestion as a param
  const onAutoSuggestionClick = () => {
    const routeToSearch = router.resolve({
      name: 'search',
      query: {
        ...searchQueryState.value,
        q: props.suggestion
      }
    });
    window.open(routeToSearch.href, '_self');
  };
</script>
