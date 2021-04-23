import { createApp } from 'vue'
import App from './App.vue'

import { useAntDesign } from '@/plugins/ant-design'

const app = createApp(App)
useAntDesign(app)
app.mount('#app')
