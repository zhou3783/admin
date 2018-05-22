import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AdminMain from '@/components/adminPages/Main'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/admin',
      name: 'AdminMain',
      component: AdminMain
    },
  ]
})
