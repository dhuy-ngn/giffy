import MasonryWall from '@yeger/vue-masonry-wall';

import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(MasonryWall);
app.use(PrimeVue, {
  unstyled: true
});

app.mount('#app');
