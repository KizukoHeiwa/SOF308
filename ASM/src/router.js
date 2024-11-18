import { createMemoryHistory, createRouter } from 'vue-router'

import login from './components/login.vue'
import posting from './components/posting.vue'
import register from './components/register.vue'
import information from './components/information.vue'
import index from './components/index.vue'
import postDetail from './components/postDetail.vue'
import post from './components/post.vue'



const routes = [
  { path: '/', component: index},
  { path: '/login', component: login},
  { path: '/register', component: register},
  { path: '/posting', component: posting},
  { path: '/information', component: information},
  { path: '/postDetail', component: postDetail},
  { path: '/post', component: post}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})



export default router