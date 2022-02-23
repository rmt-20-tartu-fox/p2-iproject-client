import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/historylist",
    name: "HistoryList",
    // route level code-splitting
    // this generates a separate chunk (HistoryList.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "HistoryList" */ "../views/HistoryList.vue"),
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
    path: "/formbalance",
    name: "FormBalance",
    // route level code-splitting
    // this generates a separate chunk (Form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Form" */ "../views/FormBalance.vue"),
  },
  {
    path: "/formcashflow",
    name: "FormCashFlow",
    // route level code-splitting
    // this generates a separate chunk (Form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Form" */ "../views/FormCashFlow.vue"),
  },
  {
    path: "/getcashflow",
    name: "GetCashFlow",
    // route level code-splitting
    // this generates a separate chunk (Form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Form" */ "../views/GetCashFlow.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
