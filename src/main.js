import { createApp } from 'vue'
import App from './App.vue'
import '@fontsource-variable/inter'
import '@fontsource-variable/cormorant-garamond'
import '@fontsource-variable/cormorant-garamond/wght-italic.css'
import router from './router'
import './assets/styles/main.css'

createApp(App).use(router).mount('#app')


