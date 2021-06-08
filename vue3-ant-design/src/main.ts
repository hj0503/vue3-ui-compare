import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import '@/assets/style.scss'
import usePlugins from '@/plugins/index'

const app = createApp(App)
usePlugins(app)
app.use(router)
app.mount('#app')
