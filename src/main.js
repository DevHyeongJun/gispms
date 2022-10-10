import { createApp } from 'vue'
import App from './App.vue'
import store from '@/js/store';

createApp(App)
.use(store)
.mount('#app');