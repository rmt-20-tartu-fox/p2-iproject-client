/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailOperator from '../views/DetailOperator.vue'
import LoginForm from '../views/LoginForm.vue'
import RegisterForm from '../views/RegisterForm.vue'
import StratsList from '../views/StratsList.vue'
import StratDetail from '../views/StratDetail.vue'
import AddStrat from '../views/AddStratForm.vue'
import CheckFriend from '../views/CheckFriend.vue'

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
    path: '/detail/:id',
    name: 'DetailOperator',
    component: DetailOperator
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: RegisterForm
  },
  {
    path: '/strats',
    name: 'StratsList',
    component: StratsList
  },
  {
    path: '/strats/:id',
    name: 'StratDetail',
    component: StratDetail
  },
  {
    path: '/addstrat',
    name: 'AddStrat',
    component: AddStrat
  },
  {
    path: '/check-friend',
    name: 'CheckFriend',
    component: CheckFriend
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
