import Vue from "vue";
import Vuex from "vuex";
import url from "../../apis/url";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    page: "",
    books: [],
    isLoginPage: false,
    currentPage: 1,
  },
  mutations: {
    SET_IS_LOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_PAGE(state, payload) {
      state.page = payload;
    },
    SET_BOOKS(state, payload) {
      state.books = payload;
    },
    SET_IS_LOGIN_PAGE(state, payload) {
      state.isLoginPage = payload;
    },
    SET_CURRENT_PAGE(state, payload) {
      state.currentPage = payload;
    },
  },
  actions: {
    async login(context, payload) {
      try {
        const resp = await url.post("/customers/login", {
          email: payload.email,
          password: payload.password,
        });
        localStorage.setItem("access_token");
        if (resp.status == 200) {
          context.commit("SET_IS_LOGIN", true);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async register(context, payload) {
      try {
        const resp = await url.post("/customers/register", {
          email: payload.email,
          password: payload.password,
        });
        if (resp.status == 201) {
          context.commit("SET_PAGE", "Login");
        }
      } catch (error) {
        context.commit("SET_PAGE", "");
        console.log(error);
      }
    },

    async fetchBooks(context) {
      try {
        const resp = await url.get("/customers/books");
        context.commit("SET_BOOKS", resp.data.books);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
