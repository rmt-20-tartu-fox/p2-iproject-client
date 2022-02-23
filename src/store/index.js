import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const BASE_URL = "http://localhost:3000";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    recipeDetails: {},
    mealType: "",
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
  },
  modules: {},
});
