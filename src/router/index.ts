import GifDetailView from '@/views/GifDetailView.vue';
import HomeView from '@/views/HomeView.vue';
import SearchView from '@/views/SearchView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      props: true
    },
    {
      path: '/gif/:id',
      name: 'gif-detail',
      component: GifDetailView
    }
  ]
});

export default router;
