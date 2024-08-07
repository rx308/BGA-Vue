import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vue3TouchEvents from "vue3-touch-events";

import App from './app.vue';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(Vue3TouchEvents, {
    touchHoldTolerance: 200
});

app.mount('#app');