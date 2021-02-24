import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Layout from '@/pages/Layout.vue';
import Home from '@/pages/Home.vue'
import slotDemo from '@/pages/slotDemo.vue'

const routes = [
  {
    path:'/',
    name: 'Layout',
    component: Layout,
    redirect: { name: 'Home' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        
        // meta: { trust: true }
      },
      {
        path: 'slotDemo',
        name: 'slotDemo',
        component: slotDemo,
        // meta: { trust: true }
      },
    ]
  }
]

const router =  new VueRouter({
  routes
})

export default router;