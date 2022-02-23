import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Diagnose from "../views/Diagnose.vue";
import Result from "../views/Result.vue";
import Location from "../views/Location.vue";
import Nearby from "../views/NearbyPlace.vue";

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
  {
    path: "/location",
    name: "Location",
    component: Location,
    children: [
      {
        path: "nearby",
        name: "Nearby",
        component: Nearby,
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
