<!--
  * Filename: GifItem.vue
  * Author: Huy Nguyen
  * Date: December 25, 2023
  * Description: Contains the implementation of individual gif item
-->

<template>
  <div
    class="relative"
    @mouseover="showOverlay"
    @mouseleave="hideOverlay"
    @click="openGifDetailPage"
  >
    <img
      :src="props.gifData.images.fixed_width.url"
      class="min-h-[200px] max-h-[250px] hover:cursor-pointer object-fill w-full"
    />
    <gif-detail-overlay
      v-if="isOverlayDisplayed"
      :title="props.gifData.title"
    />
  </div>
</template>

<script setup lang="ts">
  import type { GiphyGif } from '@/types/GiphyGif';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import GifDetailOverlay from './GifDetailOverlay.vue';

  type Props = {
    gifData: GiphyGif;
  };
  const props = defineProps<Props>();

  const router = useRouter();
  const routeToGifDetail = router.resolve({
    name: 'gif-detail',
    params: { id: props.gifData.id }
  });
  const openGifDetailPage = () => {
    window.open(routeToGifDetail.href, '_blank');
  };

  const isOverlayDisplayed = ref(false);

  const showOverlay = () => {
    isOverlayDisplayed.value = true;
  };

  const hideOverlay = () => {
    isOverlayDisplayed.value = false;
  };
</script>

<style scoped></style>
