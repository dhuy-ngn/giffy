<!--
  * Filename: GifDetail.vue
  * Author: Huy Nguyen
  * Date: December 25, 2023
  * Description: Contains the implementation of the overlay that display when user hover over each gif
-->

<template>
  <div
    class="h-[80px] w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-transparent to-gray-700"
  >
    <p class="text-extrabold font-xl absolute bottom-0 p-2 text-white">
      {{ props.title ? props.title : '(No title)' }}
    </p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String
    }
  });
</script>
