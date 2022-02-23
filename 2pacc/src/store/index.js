import Vue from "vue";
import Vuex from "vuex";
import axios from "../api/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    memesDb: [],
    memesApi: [],
    jokes: [],
    categories: [],
  },
  mutations: {
    FETCH_MEMES_DB(state, memes) {
      state.memesDb = memes;
    },
    FETCH_MEMES_API(state, memes) {
      state.memesApi = memes;
    },
    FETCH_JOKES(state, jokes) {
      state.jokes = jokes;
    },
    FETCH_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    register(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/register", {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            yearOfBirth: payload.yearOfBirth,
          })
          .then((resp) => {
            resolve(resp);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("login", payload)
          .then((resp) => {
            console.log(resp);
            localStorage.access_token = resp.data.access_token;
            localStorage.username = resp.data.username;
            localStorage.countJokes = 0;
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fetchMemesApi(context) {
      axios
        .get("/memes/api", {
          headers: { access_token: localStorage.access_token },
        })
        .then((resp) => {
          console.log(resp);
          context.commit("FETCH_MEMES_API", resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchMemesDb(context) {
      axios
        .get("/memes/db", {
          headers: { access_token: localStorage.access_token },
        })
        .then((resp) => {
          context.commit("FETCH_MEMES_DB", resp.data);
          context;
          console.log(resp, "<<<<< meme db");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchCategories(context) {
      axios
        .get("/categories", {
          headers: { access_token: localStorage.access_token },
        })
        .then((resp) => {
          context.commit("FETCH_CATEGORIES", resp.data);
          console.log(resp.data, "<<<<<< categories");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchJokes(context) {
      axios
        .get("/jokes", {
          headers: { access_token: localStorage.access_token },
        })
        .then((resp) => {
          context.commit("FETCH_JOKES", resp.data);
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addMeme(context, payload) {
      console.log(payload, "<<< add meme");
      return new Promise((resolve, reject) => {
        axios
          .post("/memes", payload, {
            headers: {
              access_token: localStorage.access_token,
            },
          })
          .then((resp) => {
            console.log(resp);
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
  },
  modules: {},
});
