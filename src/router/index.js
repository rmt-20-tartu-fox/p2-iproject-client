import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewLoginView from "../views/newLoginView.vue";
import RecipeDetailsView from "../views/RecipeDetailsView.vue";
import wishListView from "../views/wishListView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "NewLoginView",
    component: NewLoginView,
  },
  {
    path: "/details/:id",
    name: "RecipeDetailsView",
    component: RecipeDetailsView,
  },
  {
    path: "/wishlist",
    name: "wishListView",
    component: wishListView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/wishlist" && !localStorage.access_token)
    next({ path: "/login" });
  else next();

  if (to.path === "/login" && localStorage.access_token) next({ path: "/" });
  else next();
});

export default router;
