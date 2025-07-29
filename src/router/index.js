import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import AddRecordStep1 from '../pages/AddRecordStep1.vue'
import AddRecordStep2 from '../pages/AddRecordStep2.vue'
import AddRecordStep3 from '../pages/AddRecordStep3.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/add-record/step1',
    name: 'AddRecordStep1',
    component: AddRecordStep1
  },
  {
    path: '/add-record/step2',
    name: 'AddRecordStep2',
    component: AddRecordStep2
  },
  {
    path: '/add-record/step3',
    name: 'AddRecordStep3',
    component: AddRecordStep3
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 