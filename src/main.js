import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import Tooltip from 'primevue/tooltip';
import DialogService from 'primevue/dialogservice';

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

createApp(App)
.use(OpenLayersMap)
.use(PrimeVue)
.mount('#app');

App.use(DialogService);
App.directive('tooltip', Tooltip);