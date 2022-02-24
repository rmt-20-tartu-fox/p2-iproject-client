import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import swal from "sweetalert";

const homeGuard = (to, from, next) => {
  if (!localStorage.access_token) {
    next({ name: "Login" })
    swal('Need to login first!')
  } else {
    next()
  }
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: homeGuard,
    component: Home,
  },
  {
    path: "/historylist",
    name: "HistoryList",
    beforeEnter: homeGuard,
    // route level code-splitting
    // this generates a separate chunk (HistoryList.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "HistoryList" */ "../views/HistoryList.vue"),
  },
  {
    path: "/balancelist",
    name: "BalanceList",
    beforeEnter: homeGuard,
    // route level code-splitting
    // this generates a separate chunk (BalanceList.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "BalanceList" */ "../views/BalanceList.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/formbalance",
    name: "FormBalance",
    beforeEnter: homeGuard,
    // route level code-splitting
    // this generates a separate chunk (Form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Form" */ "../views/FormBalance.vue"),
  },
  {
    path: "/formcashflow",
    name: "FormCashFlow",
    beforeEnter: homeGuard,
    // route level code-splitting
    // this generates a separate chunk (Form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Form" */ "../views/FormCashFlow.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
