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
      path: '/shop',
      name: 'productList',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/product/:productId',
      name: 'productDetails',
      component: () => import('../views/ProductDetailsView.vue')
    }
  ]
})

export default router
