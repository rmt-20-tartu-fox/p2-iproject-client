import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import Swal from "sweetalert2";
const BASE_URL = "http://localhost:3000";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    recipeDetails: {},
    mealType: "",
    isLogin: false,
    wishlists: [],
  },
  getters: {},
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },

    setDetailRecipes(state, payload) {
      state.recipeDetails = payload;
    },
    setMealType(state, payload) {
      state.mealType = payload;
    },
    setLogin(state, payload) {
      state.isLogin = payload;
      // console.log(state.isLogin);
    },
    setWishlist(state, payload) {
      // console.log(payload, "><><><><><><><><><><><><");
      state.wishlists = payload;
    },
  },
  actions: {
    fetchRecipes(context, data) {
      console.log(data.recipeName);
      axios
        .get(
          BASE_URL +
            `/recipes?search=${data.recipeName}&mealType=${data.mealType}`
        )
        .then((resp) => {
          console.log(resp.data);
          context.commit("setRecipes", resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchDetail(context, id) {
      axios
        .get(BASE_URL + `/recipes/${id}`)
        .then((resp) => {
          context.commit(`setDetailRecipes`, resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login(context, data) {
      axios
        .post(BASE_URL + "/login", data)
        .then((resp) => {
          console.log(resp);
          localStorage.setItem("access_token", resp.data.access_token);
          localStorage.setItem("username", resp.data.email);
          context.commit("setLogin", true);
          router.push("/");
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "NICE RECIPES",
          });
        })
        .catch((err) => {
          console.log(err);
          const error = err.response.data.message;
          if (Array.isArray(error)) {
            Swal.fire("Oops!", error.join("\n"), "error");
          } else {
            Swal.fire("Oops!", error, "error");
          }
        });
    },
    register(context, data) {
      // const BASE_URL = "http://localhost:3000";
      axios
        .post(BASE_URL + "/register", data)
        .then((resp) => {
          router.push("/login");
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
          const error = err.response.data.message;
          if (Array.isArray(error)) {
            Swal.fire("Oops!", error.join("\n"), "error");
          } else {
            Swal.fire("Oops!", error, "error");
          }
          console.log(err);
        });
    },
    addWishList(context, id) {
      console.log(id);
      axios
        .post(
          BASE_URL + `/wishlist/${id}`,
          {},
          {
            headers: { access_token: localStorage.access_token },
          } // kalo ada post dengan access token param kedua {} kalo ga ada datanya
        )
        .then((resp) => {
          Swal.fire("Success!", "Add Wishlist", "success");
          console.log(resp);
        })
        .catch((err) => {
          const error = err.response.data.message;
          if (Array.isArray(error)) {
            Swal.fire("Oops!", error.join("\n"), "error");
          } else {
            Swal.fire("Oops!", error, "error");
          }
          // console.log(err);
        });
    },
    fetchWishList(context) {
      axios
        .get(BASE_URL + "/wishlist", {
          headers: { access_token: localStorage.access_token },
        })
        .then((resp) => {
          console.log(resp);
          context.commit("setWishlist", resp.data);
        })
        .catch((err) => {
          const error = err.response.data.message;
          if (Array.isArray(error)) {
            Swal.fire("Oops!", error.join("\n"), "error");
          } else {
            Swal.fire("Oops!", error, "error");
          }
        });
    },
    deleteWishList(context, id) {
      console.log(id);
      axios
        .delete(BASE_URL + `/wishlist/${id}`, {
          headers: { access_token: localStorage.access_token },
        })
        .then((resp) => {
          // this.$postupdate();
          console.log(resp);
          context.dispatch("fetchWishList");
          Swal.fire("Success!", "Success Delete a Wishlist", "success");
        })
        .catch((err) => {
          const error = err.response.data.message;
          if (Array.isArray(error)) {
            Swal.fire("Oops!", error.join("\n"), "error");
          } else {
            Swal.fire("Oops!", error, "error");
          }
          console.log(err);
        });
    },
  },
  modules: {},
});
