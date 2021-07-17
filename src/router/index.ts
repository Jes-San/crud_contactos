import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
{
    path: '/',
    name: 'add',
    component: () => import('../components/UserCreate.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/UserList.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/UserEdit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
