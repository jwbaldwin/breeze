import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/components/home/Home.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/plan', name: 'PlanCalls', component: () => import('@/components/plans/PlanCalls.vue')},
  {path: '/templates', name: 'Templates', component: () => import('@/components/templates/Templates.vue')},
  {path: '/about', name: 'About', component: () => import('@/components/About.vue')}, // Lazy load route component
]

export default createRouter({
  routes,
  history: createWebHashHistory(),
})
