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
    path: "/signin",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/profile",
    name: "MyProfile",
    component: () => import("../views/MyProfile.vue"),
  },
  {
    path: "/profile-edit",
    name: "ProfileFormEdit",
    component: () => import("../views/ProfileFormEdit.vue"),
  },
  {
    path: "/profile-complete",
    name: "ProfileFormCreate",
    component: () => import("../views/ProfileFormCreate.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/Chat.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");
  if ((to.name === "Home" || to.name === "MyProfile" || to.name === "ProfileFormEdit" || to.name === "ProfileFormCreate" || to.name === "Chat") && !token) {
    next({
      name: "Login",
    });
  } else if (token && (to.name === "Register" || to.name === "Login")) {
    next({
      name: "Home",
    });
  } else {
    next();
  }
});

export default router;
