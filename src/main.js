import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import instance from '@/utils/axios'

const pinia = createPinia()
pinia.use(({ store }) => {
    store.$axios = instance
})

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
