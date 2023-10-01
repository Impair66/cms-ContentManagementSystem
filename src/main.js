import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import store from './store'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
