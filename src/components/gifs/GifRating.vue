<!--
  * Filename: GifRating.vue
  * Author: Huy Nguyen
  * Date: December 31, 2023
  * Description: Contains the implementation of the gif maturity rating badge, as seen on the gif detail page
-->

<template>
  <Badge
    :value="props.rating"
    :class="computedBgClass()"
    class="px-3 py-0 rounded-md text-gray-100 text-md uppercase font-bold"
  />
</template>

<script setup lang="ts">
  import type { Rating } from '@/types/Rating';
  import Badge from 'primevue/badge';

  type Props = {
    rating?: Rating;
  };

  const props = defineProps<Props>();

  const computedBgClass = () => {
    switch (props.rating) {
      case 'g':
        return 'bg-[#26948B]';
      case 'pg':
        return 'bg-[#0099A9]';
      case 'pg-13':
        return 'bg-[#EFD077]';
      case 'r':
        return 'bg-[#E76C53]';
    }
  };
</script>
