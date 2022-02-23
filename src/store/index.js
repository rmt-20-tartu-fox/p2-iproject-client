import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
const BASE_URL = "http://localhost:3000";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    recipeDetails: {},
    mealType: "",
    isLogin: false,
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
          // Swal.fire("Success!", "Branded Things", "success");
        })
        .catch((err) => {
          console.log(err);
          // const error = err.response.data.message;
          // if (Array.isArray(error)) {
          //   Swal.fire("Oops!", error.join("\n"), "error");
          // } else {
          //   Swal.fire("Oops!", error, "error");
          // }
        });
    },
  },
  modules: {},
});
