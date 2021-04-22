import { createApp } from 'vue'
import App from './App.vue'

import { useElementPlus } from '@/plugins/element-plus'

const app = createApp(App)

useElementPlus(app)

app.mount('#app')
