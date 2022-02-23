import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Diagnose from "../views/Diagnose.vue";
import Result from "../views/Result.vue";
import Location from "../views/Location.vue";
import Nearby from "../views/NearbyPlace.vue";
import Chat from "../views/Chat.vue";
import DoctorChat from "../views/DoctorChat.vue";
import LoginPage from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
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
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/doctor",
    name: "Doctor",
    component: DoctorChat,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path == "/doctor" && !localStorage.access_token)
    next({ path: "/login" });
  else if (to.path == "/login" && localStorage.access_token)
    next({ path: "/doctor" });
  else next();
});

export default router;
