import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/views/index.vue'),
  },
]

export default routes
