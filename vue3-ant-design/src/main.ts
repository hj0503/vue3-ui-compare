import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import '@/assets/style.scss'

import { useAntDesign } from '@/plugins/ant-design'

const app = createApp(App)
useAntDesign(app)
app.use(router)
app.mount('#app')
