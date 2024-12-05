import { createWebHistory, createRouter } from 'vue-router'

import information from './components/information.vue'
import index from './components/index.vue'
import postDetail from './components/postDetail.vue'
import post from './components/post.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import createPost from './components/createPost.vue'
import manage from './components/manage.vue'

const routes = [
  { path: '/', component: index},
  { path: '/login', component: login},
  { path: '/register', component: register},
  { path: '/information', component: information},
  { path: '/post', component: post},
  { path: '/createPost', component: createPost},
  { path: '/manage', component: manage},
  {
    path: '/postDetail/:id',
    name: 'PostDetail',
    component: postDetail,
    props: true,  // Điều này sẽ truyền 'id' dưới dạng prop đến component
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router