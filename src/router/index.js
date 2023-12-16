import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Berlin',
      name: 'Berlin',
      component: () => import('../views/BerlinView.vue')
    },
    {
      path: '/Bern',
      name: 'Bern',
      component: () => import('../views/BernView.vue')
    },
    {
      path: '/KualaLumpur',
      name: 'Kuala Lumpur',
      component: () => import('../views/KualaLumpurView.vue')
    },
    {
      path: '/Rome',
      name: 'Rome',
      component: () => import('../views/RomeView.vue')
    },
    {
      path: '/Tokyo',
      name: 'Tokyo',
      component: () => import('../views/TokyoView.vue')
    },
    {
      path: '/SanDiego',
      name: 'San Diego',
      component: () => import('../views/SanDiegoView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
