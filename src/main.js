import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'
import store from '@/js/store';

createApp(App)
.use(OpenLayersMap)
.use(PrimeVue)
.use(store)
.mount('#app');
