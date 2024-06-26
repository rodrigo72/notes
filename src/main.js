import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import "primeicons/primeicons.css";
import 'primevue/resources/themes/aura-dark-indigo/theme.css'

const app = createApp(App)
app.use(PrimeVue)
app.mount('#app')