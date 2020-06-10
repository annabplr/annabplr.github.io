import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Skills from '../views/Skills.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/profil',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/experience',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
