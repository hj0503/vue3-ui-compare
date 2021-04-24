import { createRouter, createWebHistory } from 'vue-router'
import routes from './route-list'

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
