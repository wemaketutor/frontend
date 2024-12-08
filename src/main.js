import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import VueCookies from 'vue-cookies'

createApp(App).use(router).use(VueCookies).mount('#app')


import axios from 'axios'
import 'dotenv/config'

axios.defaults.baseURL = process.env.BACKEND_URL;
// axios.defaults.baseURL = 'http://localhost:8080';
