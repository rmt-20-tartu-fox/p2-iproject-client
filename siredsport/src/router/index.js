import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import swal from "sweetalert2"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        swal.fire({
          icon: "info",
          title: "You are logged in"
        })
        return false
      } else {
        next()
      }
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        swal.fire({
          icon: "info",
          title: "you have registered"
        })
        return false
      } else {
        next()
      }
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
  },
  {
    path: "/order",
    name: "Order",
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) {
        swal.fire({
          icon: "info",
          title: "You should login first"
        })
        router.push({
          name: "Login"
        })
        return false
      } else {
        next()
      }
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Order.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) {
        swal.fire({
          icon: "info",
          title: "You should login first"
        })
        router.push({
          name: "Login"
        })
        return false
      } else {
        next()
      }
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
