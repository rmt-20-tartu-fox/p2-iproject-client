import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ListManga from '../views/ListManga.vue'
import ListAnime from '../views/ListAnime.vue'
import MangaDetail from '../views/MangaDetail.vue'
import AnimeDetail from '../views/AnimeDetail.vue'
import MyFavorite from '../views/MyFavorite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/manga',
    name: 'ListManga',
    component: ListManga
  },
  {
    path: '/manga/:id',
    name: 'MangaDetail',
    component: MangaDetail
  },
  {
    path: '/anime',
    name: 'ListAnime',
    component: ListAnime
  },
  {
    path: '/anime/:id',
    name: 'AnimeDetail',
    component: AnimeDetail
  },
  {
    path: '/myfavorite',
    name: 'MyFavorite',
    component: MyFavorite
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
