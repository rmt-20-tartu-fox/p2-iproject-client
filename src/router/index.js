import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HotelByCity from '../views/HotelByCity.vue'

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
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
