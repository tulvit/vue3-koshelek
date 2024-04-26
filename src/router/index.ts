import { createRouter, createWebHistory } from 'vue-router'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vue3-koshelek/',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/vue3-koshelek/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrderView.vue')
    }
  ]
})

export default router
