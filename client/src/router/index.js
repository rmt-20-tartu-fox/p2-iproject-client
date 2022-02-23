import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import BirthPage from "../views/BirthPage.vue";

Vue.use(VueRouter);

const noTokenBouncer = (to, from, next) => {
  if (!localStorage.access_token) {
    next({ name: "LoginPage" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "HomePage",
    beforeEnter: noTokenBouncer,
    component: HomePage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/birthpage",
    name: "BirthPage",
    component: BirthPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
