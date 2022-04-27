import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL), // https://vitejs.dev/guide/env-and-mode.html

  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/products', name: 'products',
      // route level code-splitting
      // this generates a separate chunk (Products.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsView.vue')
    },
    { path: '/githubsearch', name: 'SearchGH', component: () => import('../views/SearchGHView.vue') },
    { path: '/CarouselUno', name: 'CarouselUno', component: () => import('../views/CarouselView.vue') }

  ]

})

export default router
