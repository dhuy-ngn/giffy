<!--
  * Filename: SearchView.vue
  * Author: Huy Nguyen
  * Date: December 30, 2023
  * Description: Contains the implementation of the Gif detail page, shown when user clicks on a gif item

  BUG Cannot fetch any data if response returns any giphy media url that does not start with {@link} https://media0.giphy.com
-->

<template>
  <div class="flex w-[1280px] mx-auto mt-16 gap-8">
    <div class="flex flex-col flex-1 gap-4 flex-shrink">
      <div class="flex gap-4 items-center justify-start">
        <img
          :src="results?.user.avatar_url"
          height="48"
          width="48"
          class="rounded-md"
        />
        <a
          class="font-mono text-gray-50 font-bold text-xl truncate hover:underline"
          :href="results?.user.profile_url"
          target="_blank"
        >
          {{ results?.username }}
        </a>
      </div>
    </div>

    <div class="flex flex-col flex-grow justify-center gap-4">
      <p class="text-md text-gray-400 font-bold font-mono">
        {{ results?.title }}
      </p>
      <img :src="results?.images.original.webp" />
    </div>

    <div>
      <div class="flex flex-col items-start flex-1 gap-4">
        <div class="flex gap-4 items-center self-end">
          <span class="text-md text-gray-400 font-mono font-semibold">
            Maturity rating
          </span>
          <gif-rating :rating="results?.rating" />
        </div>
        <div class="flex flex-col gap-10">
          <div
            class="py-4 hover:bg-gradient-to-r hover:from-blue-700 hover:via-purple-500 hover:to-pink-500 px-2"
          >
            <button
              class="text-gray-200 text-md font-semibold"
              @click="copyLinkToPage"
            >
              <span> <i class="fa-solid fa-link mr-2" />Copy link</span>
            </button>
          </div>

          <div
            class="flex flex-col gap-4 font-mono"
            v-if="results?.source_post_url"
          >
            <p class="font-bold text-xs text-gray-400">Source</p>
            <a
              class="font-semibold text-gray-50 text-sm"
              :href="results?.source_post_url"
              target="_blank"
            >
              {{ results?.source_post_url }}
            </a>
          </div>

          <p class="font-semibold text-sm text-gray-400">
            Created at {{ results?.import_datetime }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script async setup lang="ts">
  import GifRating from '@/components/gifs/GifRating.vue';
  import type { GiphyApiResponse } from '@/types/GiphyApiResponse';
  import axios from '@/utils/axios';

  import type { GifDetailQuery } from '@/types/GifDetailQuery';
  import type { GiphyGif } from '@/types/GiphyGif';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const id = ref();
  const results = ref<GiphyGif>();

  const fetchData = async () => {
    try {
      axios.get<GifDetailQuery, GiphyApiResponse>(id.value).then(({ data }) => {
        results.value = data;
      });
    } catch (e) {
      console.log(e);
    }
  };

  const copyLinkToPage = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };

  onMounted(() => {
    id.value = route.params.id || '';
    fetchData();
  });
</script>
