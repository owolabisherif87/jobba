import { createApp } from 'vue'
import './scss/style.scss'
import router from './router'
import { createPinia, storeToRefs } from 'pinia'
// Import all of Bootstrap's JS
import './style.css'
import {useLoginStore} from "./store/useLoginStore"


import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

const store = useLoginStore()
const {isLogedIn} = storeToRefs(store)

router.beforeEach((to, from, next) => {
    if(to.meta.middleware == "auth" && !isLogedIn.value) router.push(`/login?redirect=${to.meta.name}`)

    next()
})
app.mount('#app')
