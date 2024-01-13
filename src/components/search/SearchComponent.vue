<!--
  * Filename: SearchComponent.vue
  * Author: Huy Nguyen
  * Date: December 25, 2023
  * Description: Contains the implementation of the search components, including the search bar and the search button
  TODO: Add a maturity rating filter
-->

<template>
  <div class="flex flex-col gap-4 justify-center items-censter w-[60%]">
    <form
      @submit.prevent="onSubmit"
      class="flex gap-0 w-full"
    >
      <input
        placeholder="Search all GIFs..."
        class="flex flex-grow px-6 focus:outline-none bg-gray-50 rounded-l-md font-mono"
        v-model.trim="searchTerm"
        @input="handleAutoCompleteResults"
      />
      <button
        type="submit"
        class="bg-gradient-to-tr from-purple-600 to-pink-600 p-6 rounded-r-md"
      >
        <i class="fa-solid fa-magnifying-glass text-white" />
      </button>
    </form>

    <span
      class="text-red-500 font-mono px-6 text-sm"
      v-if="errors.searchTerm"
      >* {{ errors.searchTerm }}</span
    >

    <!--Contains auto suggestion results-->
    <div class="relative">
      <div
        v-if="autoCompleteResults.length > 0"
        class="flex flex-col items-start bg-white absolute top-0 left-0 z-20 w-full px-6 gap-2 py-4 rounded-md"
      >
        <search-auto-suggestion-result
          v-for="(result, index) in autoCompleteResults"
          :key="index"
          :search-term="searchTerm"
          :suggestion="result.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { type AutoCompleteSuggestion } from '@/types/AutoCompleteSuggestion';
  import type { SearchQuery } from '@/types/SearchQuery';
  import axios from '@/utils/axios';
  import { toTypedSchema } from '@vee-validate/zod';
  import { useField, useForm } from 'vee-validate';
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import * as zod from 'zod';
  import SearchAutoSuggestionResult from './SearchAutoSuggestionResult.vue';

  /** Schema for the search component, which only includes a search bar for now
   * TODO: Add schema for maturity rating */
  const validationSchema = toTypedSchema(
    zod.object({
      searchTerm: zod
        .string({
          required_error:
            'Oops! The search box feels lonely without some text. Type something to keep it company!'
        })
        .min(1, {
          message:
            'Oops! The search box feels lonely without some text. Type something to keep it company!'
        })
        .trim()
    })
  );

  const { handleSubmit, errors } = useForm({
    validationSchema
  });
  const { value: searchTerm } = useField<string>('searchTerm');

  const defaultQuery = ref<SearchQuery>({
    searchType: 'search',
    q: searchTerm.value,
    limit: 40,
    rating: 'g',
    offset: 0
  });

  const router = useRouter();

  const onSubmit = handleSubmit(() => {
    const routeToSearch = router.resolve({
      name: 'search',
      query: {
        ...defaultQuery.value,
        q: searchTerm.value
      }
    });
    window.open(routeToSearch.href, '_self');
  });

  const autoCompleteResults = ref<AutoCompleteSuggestion[]>([]);

  /** Max number of search auto suggests that is shown during fetch */
  const NO_OF_SEARCH_AUTO_SUGGESTIONS = 5;

  /** The duration to start fetching auto-complete results after user stops typing on the search bar, in ms */
  const SEARCH_BAR_STOP_TYPING_DURATION = 700;

  /** Typing timer to fetch auto-complete results after user stop typing on the search bar for a period of time */
  let typingTimer: number = 0;

  /** Fetch auto-complete results from the input of the search bar */
  const fetchAutoCompleteResults = async () => {
    if (searchTerm.value.trim()) {
      axios
        .get('/search/tags', {
          params: {
            q: searchTerm.value,
            limit: NO_OF_SEARCH_AUTO_SUGGESTIONS
          }
        })
        .then((res) => {
          autoCompleteResults.value = [...res.data];
        });
    }
  };

  // If the user stops typing for a period of time, start a counter to start
  // fetching auto-complete results after the counter reaches a period of time.
  // Reset this counter after user starts typing again
  const handleAutoCompleteResults = () => {
    clearTimeout(typingTimer);

    typingTimer = setTimeout(async () => {
      await fetchAutoCompleteResults();
    }, SEARCH_BAR_STOP_TYPING_DURATION);
  };

  // Clears all auto suggestion results if user clears the search box
  watch(
    () => searchTerm.value,
    () => {
      if (!searchTerm.value) {
        autoCompleteResults.value = [];
      }
    }
  );
</script>

<style scoped></style>
