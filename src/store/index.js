import Vue from "vue";
import Vuex from "vuex";
import smdMovies from "../apis/api_url";
import Swal from "sweetalert";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    movies: [],
    movieDetail: {},
    orders: [],
    prices: [],
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
    SET_ORDER_DETAIL(state, payload) {
      state.orders = payload;
    },
    SET_PRICE(state, payload) {
      state.prices = payload;
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
        Swal("Success! Registered!", {
          icon: "success",
        });
      } catch (err) {
        let errorMessage = err.response.data.message;
        Swal("Oops!", errorMessage.join("\n"), "error");
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
        Swal("Success! Login!", {
          icon: "success",
        });
      } catch (err) {
        let errorMessage = err.response.data.message;
        if (!Array.isArray(errorMessage)) {
          Swal("Oops!", errorMessage, "error");
        } else {
          Swal("Oops!", errorMessage.join("\n"), "error");
        }
      }
    },

    async fetchDataMovies(context) {
      try {
        const response = await smdMovies.get("/movies");
        context.commit("SET_MOVIES", response.data.results);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchDataMovieDetail(context, payload) {
      try {
        const response = await smdMovies.get(`/movies/${payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        context.commit("SET_MOVIE_DETAIL", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchDataOrder(context) {
      try {
        const response = await smdMovies.get("/transactions", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        context.commit("SET_ORDER_DETAIL", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchDataPrice(context) {
      try {
        const response = await smdMovies.get("/prices");
        context.commit("SET_PRICE", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async addTransaction(_, payload) {
      try {
        await smdMovies.post(
          `/movies/${payload.MovieId}`,
          {
            PriceId: payload.PriceId,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        // console.log(response.data, "=========");
      } catch (err) {
        console.log(err);
      }
    },

    async getTokenPayment(_, payload) {
      try {
        const response = await smdMovies.post(
          `/transactions/${payload.id}`,
          { MovieId: payload.MovieId },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        localStorage.setItem("redirect_url", response.data.redirect_url);
      } catch (err) {
        console.log(err);
      }
    },

    async editPayment(_, payload) {
      try {
        await smdMovies.patch(`/payment/${payload.id}`, null, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
