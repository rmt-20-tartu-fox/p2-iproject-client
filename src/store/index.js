import Vue from "vue";
import Vuex from "vuex";
import smdMovies from "../apis/api_url";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    movies: [],
    movieDetail: {},
  },
  mutations: {
    SET_IS_LOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_MOVIES(state, payload) {
      state.movies = payload;
    },
    SET_MOVIE_DETAIL(state, payload) {
      state.movieDetail = payload;
    },
  },
  actions: {
    async registerHandler(_, payload) {
      try {
        await smdMovies.post("/register", {
          name: payload.name,
          email: payload.email,
          password: payload.password,
        });
      } catch (err) {
        console.log(err);
      }
    },

    async loginHandler(context, payload) {
      try {
        const response = await smdMovies.post("/login", {
          email: payload.email,
          password: payload.password,
        });

        localStorage.setItem("access_token", response.data.access_token);
        context.commit("SET_IS_LOGIN", true);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchDataMovies(context) {
      try {
        const response = await smdMovies.get("/");
        context.commit("SET_MOVIES", response.data.results);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchDataMovieDetail(context, payload) {
      try {
        const response = await smdMovies.get(`/${payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        context.commit("SET_MOVIE_DETAIL", response.data);
        console.log(
          "🚀 ~ file: index.js ~ line 68 ~ fetchDataMovieDetail ~ response.data",
          response.data
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
