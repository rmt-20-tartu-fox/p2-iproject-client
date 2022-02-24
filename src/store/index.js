import Vue from "vue";
import Vuex from "vuex";
import datingApi from "../apis/datingapp";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggin: false,
    isRegistered: false,
    isDone: false,
    usersData: {},
    currentPage: 1,
    user: {},
    matches: [],
  },
  mutations: {
    SET_LOGIN_STATUS: function (state, payload) {
      state.isLoggin = payload;
    },
    SET_REGISTRATION_STATUS: function (state, payload) {
      state.isRegistered = payload;
    },
    SET_PROFILE_STATUS: function (state, payload) {
      state.isDone = payload;
    },
    SET_USERS: function (state, payload) {
      state.usersData = payload;
    },
    SET_PAGE_NUMBERS: function (state, payload) {
      state.currentPage = payload;
    },
    SET_USER: function (state, payload) {
      state.user = payload;
    },
    SET_MATCHES: function (state, payload) {
      state.matches = payload;
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
          localStorage.setItem("user_id", user.data.id);
          context.commit("SET_LOGIN_STATUS", true);
          Swal.fire("Welcome!", "", "success");
        }
      } catch (error) {
        Swal.fire(`Error ${error.response.status}`, `${error.response.data.message}`, "error");
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
          Swal.fire("Sign up successful", "Please sign in", "success");
        }
      } catch (error) {
        Swal.fire(`Error ${error.response.status}`, `${error.response.data.message}`, "error");
      }
    },
    createProfile: async function (context, payload) {
      try {
        const id = localStorage.getItem("user_id");
        const profile = await datingApi.post(
          `users/${id}/profiles`,
          {
            name: payload.nama,
            education: payload.education,
            job: payload.job,
            description: payload.description,
            sex: payload.sex,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        console.log(profile.status);
        if (profile.status === 201) {
          context.commit("SET_PROFILE_STATUS", true);
        }
      } catch (error) {
        Swal.fire(`Error ${error.response.status}`, `${error.response.data.message}`, "error");
      }
    },
    fetchAllUsers: async function (context, query) {
      try {
        let url = `users?page=${context.state.currentPage}`;
        // { maxAge, sex, maxDistance, page }
        if (query.sex) {
          url += `&sex=${query.sex}`;
        }
        if (query.maxAge) {
          url += `&maxAge=${query.maxAge}`;
        }
        if (query.maxDistance) {
          url += `&maxAge=${query.maxDist}`;
        }
        console.log(url);
        const data = await datingApi.get(url, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        context.commit("SET_USERS", data.data);
      } catch (error) {
        Swal.fire(`Error ${error.response.status}`, `${error.response.data.message}`, "error");
      }
    },
    smashOrPass: async (_, payload) => {
      try {
        await datingApi.post(
          `/${payload.id}/likes`,
          {
            status: payload.resp,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
      } catch (error) {
        Swal.fire(`Error ${error.response.status}`, `${error.response.data.message}`, "error");
      }
    },

    viewMyProfile: async (context) => {
      try {
        const id = localStorage.getItem("user_id");
        const myProfile = await datingApi.get(`/${id}/profiles`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        context.commit("SET_USER", myProfile.data);
      } catch (error) {
        Swal.fire(`Error ${error.response.status}`, `${error.response.data.message}`, "error");
      }
    },

    viewMatches: async (context) => {
      try {
        const matches = await datingApi.get(`/matches`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        context.commit("SET_MATCHES", matches.data);
      } catch (error) {
        Swal.fire(`Error ${error.response.status}`, `${error.response.data.message}`, "error");
      }
    },
  },

  modules: {},
});
