import Vue from "vue";
import Vuex from "vuex";
import datingApi from "../apis/datingapp";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggin: false,
    isRegistered: false,
  },
  mutations: {
    SET_LOGIN_STATUS: function (state, payload) {
      state.isLoggin = payload;
    },
    SET_REGISTRATION_STATUS: function (state, payload) {
      state.isRegistered = payload;
    },
  },
  actions: {
    login: async function (context, payload) {
      try {
        const user = await datingApi.post("/login", {
          email: payload.email,
          password: payload.password,
        });
        if (user.status === 200) {
          localStorage.setItem("access_token", user.data.access_token);
          context.commit("SET_LOGIN_STATUS", true);
          // Swal.fire("Welcome!", "", "success");
        }
      } catch (error) {
        console.log(error);
        // Swal.fire(`Error ${error.response.status}`, `${error.response.data.message}`, "error");
      }
    },

    register: async function (context, payload) {
      try {
        const newUser = await datingApi.post("/register", {
          email: payload.email,
          password: payload.password,
          dateOfBirth: payload.dateOfBirth,
        });
        if (newUser.status === 201) {
          context.commit("SET_REGISTRATION_STATUS", true);
          // Swal.fire("Sign up successful", "Please sign in", "success");
        }
      } catch (error) {
        console.log(error);
        // Swal.fire(`Error ${error.response.status}`, `${error.response.data.message}`, "error");
      }
    },
  },
  modules: {},
});
