import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/request')
//    component: () => import('../views/HomeRequest.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/request/createRequest')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/request/listRequest')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
