import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/users/:id",
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

export default router;
