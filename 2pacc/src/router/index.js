import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue"),
    children: [
      {
        path: "/",
        component: () => import("../components/MemeDb.vue"),
      },
      {
        path: "shuffle",
        component: () => import("../components/MemeApi.vue"),
      },
      {
        path: "addmeme",
        component: () => import("../components/AddMeme.vue"),
      },
    ],
  },
  {
    path: "/likes",
    name: "Likes",
    component: () => import("../views/Likes.vue"),
  },
  {
    path: "/jokes",
    name: "Jokes",
    component: () => import("../views/Jokes.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
