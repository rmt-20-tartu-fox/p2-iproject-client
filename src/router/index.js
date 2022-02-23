import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Cart from "../views/Cart.vue";
import MyBook from "../views/MyBook.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cart/:id",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/mybook",
    name: "MyBook",
    component: MyBook,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("access_token")) {
    if (to.name == "Login" || to.name == "Register") {
      next({ name: `Home` });
    } else {
      next();
    }
  } else {
    if (to.name == `MyBook`) {
      next({ name: `Login` });
    } else {
      next();
    }
  }
});

export default router;
