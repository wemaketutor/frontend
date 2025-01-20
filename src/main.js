import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import VueCookies from 'vue-cookies'

createApp(App).use(router).use(VueCookies).mount('#app')


import axios from 'axios'

axios.defaults.baseURL = 'http://45.138.163.230/api'//import.meta.env.VITE_API_BACKEND_URL;
