import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import asynchronization from '@/views/es/asynchronization.vue'
import integratedapplication from '@/views/integratedapplication/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/asynchronization',
      name: 'asynchronization',
      component: asynchronization
    },
    {
      path: '/integratedapplication',
      name: 'integratedapplication',
      component: integratedapplication
    }
  ]
})
