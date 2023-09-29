import { createApp } from 'vue'
import './scss/style.scss'
import router from './router'

// Import all of Bootstrap's JS
import './style.css'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.mount('#app')
