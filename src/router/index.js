import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Transaction from "../views/Transaction.vue";
import Detail from "../views/MovieDetail.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Payment from "../views/PaymentConfirm.vue";

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
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/transaction",
    name: "Transaction",
    component: Transaction,
  },
  {
    path: "/movies/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
