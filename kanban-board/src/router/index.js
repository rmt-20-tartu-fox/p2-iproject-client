import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import KanbanBoard from "../views/KanbanBoard.vue";
import DetailIssue from "../views/DetailIssue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/board",
    name: "Board",
    component: KanbanBoard,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/detail",
    name: "DetailIssue",
    component: DetailIssue,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path === "/board" && !localStorage.access_token) next({ path: "/" });
  else next();

  if ((to.path === "/" || to.path === "/register") && localStorage.access_token)
    next({ path: "/board" });
  else next();
});

export default router;
