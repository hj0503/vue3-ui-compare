import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import '@/assets/style.scss'

import { useElementPlus } from '@/plugins/element-plus'

const app = createApp(App)

useElementPlus(app)
app.use(router)
app.mount('#app')
