import { createMemoryHistory, createRouter } from 'vue-router'

import home from './components/home.vue'
import bai3 from './components/bai3.vue'
import bai4 from './components/bai4.vue'

const routes = [
  { path: '/',component: home},
  { path: '/bai3', component: bai3},
  { path: '/bai4', component: bai4}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router