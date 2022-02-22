import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    file: null,
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
  },
  modules: {},
});
