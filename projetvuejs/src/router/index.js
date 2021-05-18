import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import categorie from "../components/categorie";
import en_savoir_plus from "../components/en_savoir_plus";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path : '/categorie/:id',
    name: 'categorie',
    component: categorie
  },
  {
    path : '/en_savoir_plus/:idcat/:id',
    name : 'en_savoir_plus',
    component : en_savoir_plus
  }
]

const router = new VueRouter({
  routes
})

export default router
