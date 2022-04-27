import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL), // https://vitejs.dev/guide/env-and-mode.html

  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/products', name: 'products',
      // route level code-splitting
      // this generates a separate chunk (Products.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsView.vue')
    },
    
    // { path: '/githubsearch', name: 'SearchGH', component: () => import('../views/SearchGHView.vue') },
    // { path: '/carouseluno', name: 'CarouselUno', component: () => import('../views/CarouselView.vue') },
    // { path: '/course', name: 'Course', component: () => import('../views/CourseView.vue') },
    // { path: '/prueba', name: 'Prueba', component: () => import('../views/PruebaView.vue') },
    { path: '/salon1', name: 'salon1', component: () => import('../views/Salon1View.vue') },  
    // { path: '/jsonex', name: 'jsonex', component: () => import('../views/JsonView.vue') },
    // { path: '/jsonurlex', name: 'jsonurlex', component: () => import('../views/JsonurlView.vue') },
    //{ path: '/passData', name: 'passData', component: () => import('../views/PassdataView.vue') },
    { path: '/salon2', name: 'salon2', component: () => import('../views/Salon2View.vue') },
    // { path: '/multipleFetch', name: 'multipleFetch', component: () => import('../views/MultiplefetchView.vue') },
    // { path: '/DragDrop', name: 'DragDrop', component: () => import('../views/DragDropView.vue') }
    // { path: '/about', name: 'about', component: () => import('../views/AboutView-old.vue') },

    //  works without vue 
    { path: '/htmlcssjs', name: 'htmlcssjs', component: () => import('../views/HtmlcssjsView.vue') },

  ]

})

export default router
