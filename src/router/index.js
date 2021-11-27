import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: () => import('@/layout/index')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
