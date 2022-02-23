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
import MyStrat from '../views/MyStrat.vue'
import News from '../views/NewsDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/my-strat',
    name: 'MyStrat',
    component: MyStrat
  },
  {
    path: '/news/:id',
    name: 'News',
    component: News
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  if ((to.path === "/login" || to.path === "/register") && localStorage.access_token) next({ path: "/"})
  else next()

  if ((to.path === "/addstrat" || to.path === "/my-strat") && !localStorage.access_token) next({ path: "/login"})
  else next()


})
export default router
