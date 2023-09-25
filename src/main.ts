import "bootstrap/dist/css/bootstrap.min.css"
import './assets/main.css'

import 'highlight.js/styles/an-old-hope.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
