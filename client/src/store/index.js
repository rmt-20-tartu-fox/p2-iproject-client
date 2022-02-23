import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    file: null,
    petsData: null,
    weatherData: [],
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
  },
  actions: {
    upload(context, payload) {
      return axios.post("http://localhost:3000/upload", payload, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    login(context, payload) {
      return axios.post("http://localhost:3000/login", payload);
    },
    register(context, payload) {
      return axios.post("http://localhost:3000/register", payload);
    },
    checkPet() {
      return axios.get("http://localhost:3000/pet", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    createPet(context, payload) {
      console.log(payload);
      return axios.post("http://localhost:3000/pet", payload, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    feedPet(context, payload) {
      console.log(payload);
      return axios.patch("http://localhost:3000/pet", payload, {
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

          const data = await axios.get("http://localhost:3000/weather", {
            params: { latitude, longitude },
          });
          context.commit("WEATHER_DATA_FILLER", data);
        } catch (error) {
          console.log(error);
        }
      });
    },
  },
  modules: {},
});
