import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import PRODUCTION_URL from "../apis";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    file: null,
    petsData: null,
    weatherData: [],
    animationSet: 0,
  },
  getters: {
    file: (state) => {
      return state.file;
    },
  },
  mutations: {
    FILE_FILLER(state, payload) {
      state.file = payload.value;
    },
    PETS_DATA_FILLER(state, payload) {
      state.petsData = payload.data;
    },
    WEATHER_DATA_FILLER(state, payload) {
      state.weatherData = payload.data;
    },
    ANIMATION_CHANGER(state, payload) {
      state.animationSet = payload.set;
    },
  },
  actions: {
    upload(context, payload) {
      return axios.post(PRODUCTION_URL + "/upload", payload, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    login(context, payload) {
      return axios.post(PRODUCTION_URL + "/login", payload);
    },
    register(context, payload) {
      return axios.post(PRODUCTION_URL + "/register", payload);
    },
    checkPet() {
      return axios.get(PRODUCTION_URL + "/pet", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    createPet(context, payload) {
      console.log(payload);
      return axios.post(PRODUCTION_URL + "/pet", payload, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    feedPet(context, payload) {
      console.log(payload);
      return axios.patch(PRODUCTION_URL + "/pet", payload, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    getWeather(context) {
      navigator.geolocation.getCurrentPosition(async (success) => {
        try {
          const { latitude, longitude } = success.coords;

          // bawa query params

          const data = await axios.get(PRODUCTION_URL + "/weather", {
            params: { latitude, longitude },
          });
          context.commit("WEATHER_DATA_FILLER", data);
        } catch (error) {
          console.log(error);
        }
      });
    },
    changeAnimation(context, payload) {
      context.commit("ANIMATION_CHANGER", payload);
    },
  },
  modules: {},
});
