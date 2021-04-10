import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/components/Home.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/plan', name: 'PlanCalls', component: () => import('@/components/PlanCalls.vue')},
  {path: '/templates', name: 'Templates', component: () => import('@/components/Templates.vue')},
  {path: '/about', name: 'About', component: () => import('@/components/About.vue')}, // Lazy load route component
]

export default createRouter({
  routes,
  history: createWebHashHistory(),
})
