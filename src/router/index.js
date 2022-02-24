import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Galery from "../views/Galery.vue";
import MyBook from "../views/MyBook.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/galery",
    name: "Galery",
    component: Galery,
  },
  {
    path: "/mybook",
    name: "MyBook",
    component: MyBook,
    beforeEnter: ((to, from, next) =>{
      if (!localStorage.access_token) {
        next("/login")
      }else {
        next()
      }
    })
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
