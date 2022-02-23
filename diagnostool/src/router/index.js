import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Diagnose from "../views/Diagnose.vue";
import Result from "../views/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/diagnose",
    name: "Diagnose",
    component: Diagnose,
    children: [
      {
        path: "result",
        name: "Result",
        component: Result,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
