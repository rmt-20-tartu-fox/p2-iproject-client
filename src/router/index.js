import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HotelByCity from '../views/HotelByCity.vue'
import HotelRoom from '../views/HotelRoom.vue'
import Login from '../views/Login.vue'
import BookMark from '../views/BookMark.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hotel",
    name: "Hotel",
    component: HotelByCity,
  },
  {
    path: "/room",
    name: "Room",
    component: HotelRoom,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/bookmark",
    name: "BookMark",
    component: BookMark,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name == 'BookMark' && !localStorage.access_token) next({ name: 'Home' })
  else if (to.name === 'Login' && localStorage.access_token) next({ name: 'Home' })
  else next()
  
})

export default router;
