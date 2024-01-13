<!--
  * Filename: InfiniteScrollWrapper.vue
  * Author: Huy Nguyen
  * Date: December 27, 2023
  * Description: Contains the implementation of the infinite scroll wrapper to enable infinite scrolling of the entire view port
-->

<template>
  <div
    ref="wrapper"
    class="h-auto overflow-auto flex flex-col justify-center items-center"
  >
    <slot />
    <div
      ref="end"
      class="h-[30px] flex items-center justify-center"
      v-show="showMore"
    >
      <i class="fa-solid fa-spinner animate-spin text-white font-xl"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const emit = defineEmits(['intersect']);

  const wrapper = ref();
  const end = ref();

  type Props = {
    showMore: boolean;
    threshold: number;
  };
  const props = withDefaults(defineProps<Props>(), {
    threshold: 0,
    showMore: true
  });

  onMounted(() => {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: props.threshold
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          emit('intersect');
        }
      });
    }, options);

    observer.observe(end.value);
  });
</script>

<style scoped></style>
