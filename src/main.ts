import './assets/main.css'
import './assets/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueRecaptchaPlugin, {
    v2SiteKey: import.meta.env.VITE_RECAPTCHA_V2_SITE_KEY,
})
app.use(createPinia())
app.use(router)

app.mount('#app')
