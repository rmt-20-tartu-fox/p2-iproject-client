import Vue from "vue";
import Vuex from "vuex";
import { mainApi } from "../apis";
// import axios from "axios";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    restaurantData: [],
    restaurantDetail: {},
    reviewData: [],
    imageData: [],
    locationMarkers: [],
    locPlaces: [],
  },
  mutations: {
    SET_ISLOGGED(state, payload) {
      state.isLogged = payload;
    },
    FETCH_RESTAURANTDATA(state, payload) {
      state.restaurantData = payload;
    },
    FETCH_REVIEWDATA(state, payload) {
      state.reviewData = payload;
    },
    FETCH_IMAGEDATA(state, payload) {
      state.imageData = payload;
    },
  },
  actions: {
    async registerHandler(context, user) {
      try {
        await mainApi.post("/register", user);
        Swal.fire({
          icon: "success",
          title: "Yeayy..",
          text: "Register success!!",
        });

        return true;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
    async loginHandler({ commit }, user) {
      try {
        const response = await mainApi.post("/login", user);

        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("userEmail", response.data.email);

        commit("SET_ISLOGGED", true);

        Swal.fire({
          icon: "success",
          title: "Yeayy..",
          text: "Login success!!",
        });

        return true;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
  modules: {},
});
