import { createRouter, createWebHistory } from 'vue-router'
import {Vue2ComponentSetup, Vue2ComponentDefinedSetup} from 'vue2-compiled'
import {Vue3Component} from 'vue3-compiled'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Vue3ComponentSetup',
      component: Vue3Component
    },
    {
      path: '/2',
      name: 'Vue2ComponentSetup',
      component: Vue2ComponentSetup
    },
    {
      path: '/2-defined-setup',
      name: 'Vue2ComponentDefinedSetup',
      component: Vue2ComponentDefinedSetup
    },

  ]
})

export default router
