import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const defaultIndex = "006";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: "home" }
    },
    {
      path: '/Blog/:index',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Blog/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ],
})

export default router
