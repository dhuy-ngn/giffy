<!--
  * Filename: GifList.vue
  * Author: Huy Nguyen
  * Date: December 25, 2023
  * Description: Contains the implementation of the gif list
-->

<template>
  <infinite-scroll-wrapper
    @intersect="fetchGifs"
    :threshold="0.2"
    :show-more="hasMoreItems"
  >
    <div class="w-[1280px] flex justify-center">
      <masonry-wall
        :items="results"
        :column-width="200"
        :min-columns="5"
        :max-columns="5"
        :gap="5"
      >
        <template #default="{ item }">
          <gif-item
            :gif-data="item"
            class="w-full min-h-[200px] max-h-[250px] hover:cursor-pointer"
          />
        </template>
      </masonry-wall>
    </div>
  </infinite-scroll-wrapper>
</template>

<script setup lang="ts">
  import { type GiphyGif } from '@/types/GiphyGif';
  import { type GiphyListApiResponse } from '@/types/GiphyListApiResponse';
  import type { SearchQuery, SearchType } from '@/types/SearchQuery';
  import axios from '@/utils/axios';
  import MasonryWall from '@yeger/vue-masonry-wall';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import InfiniteScrollWrapper from '../InfiniteScrollWrapper.vue';
  import GifItem from './GifItem.vue';

  const route = useRoute();
  const query = route.query;

  /** Contain all data of every gif fetched */
  const results = ref<Array<GiphyGif>>([]);

  /** The amount of gifs to load at the first time */
  const reqLimit = ref(0);

  /** Check if user has loaded the total amount of gifs of the request. */
  const hasMoreItems = ref(true);

  /** Value to set the offset params of the fetchApi function. */
  const currentPage = ref(0);

  /** The amount of items to load after user reaches the end of the page after the first fetch. */
  const ITEM_TO_LOAD_MORE = 40;

  /** Check if fetchApi has run before.*/
  const isFirstLoaded = ref(true);

  type Props = {
    /** The endpoint of the API call */
    searchType: SearchType;
  };

  const props = withDefaults(defineProps<Props>(), {
    /** If the wrapper is in homepage (hence route.query = undefined), searchType = trending instead */
    searchType: 'trending'
  });

  const fetchGifs = async () => {
    if (!hasMoreItems.value) {
      return;
    }

    try {
      axios
        .get<SearchQuery, GiphyListApiResponse>(props.searchType, {
          params: {
            ...query,
            offset: isFirstLoaded.value
              ? 0
              : currentPage.value * ITEM_TO_LOAD_MORE + reqLimit.value,
            limit: isFirstLoaded.value ? reqLimit.value : ITEM_TO_LOAD_MORE
          }
        })
        .then(({ data, pagination }) => {
          if (pagination.count + pagination.offset >= pagination.total_count) {
            hasMoreItems.value = false;
          }
          if (data) {
            results.value = [...results.value, ...data];
          }
        });
    } catch (e) {
      console.error('Error fetching data', e);
    } finally {
      !isFirstLoaded.value && currentPage.value++;
      isFirstLoaded.value = false;
    }
  };

  onMounted(() => {
    reqLimit.value = Number(route.query.limit) || ITEM_TO_LOAD_MORE;
  });
</script>
