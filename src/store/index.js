import Vue from "vue";
import Vuex from "vuex";
import serverApi from "../apis/serverApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksFilm: [],
    booksSearch: [],
    bookmarks: [],
    title: ""
  },
  mutations: {
    SET_BOOKS(state, payload){
      state.booksFilm = payload
    },

    SET_BOOKS_SEARCH(state, payload){
      state.booksSearch = payload
    },

    SET_TITLE(state, payload){
      state.title = payload
      console.log(payload);
    },

    SET_BOOKMARK(state, payload){
      state.bookmarks = payload
    }
  },
  actions: {
    handleLogin(context, payload){
      return serverApi.post("/login", payload)
    },

    loginGoogle(context, payload){
      return serverApi.post("/login-google", {token: payload})
    },

    getBookBySubject(context){
      serverApi.get("/books")
        .then(res => {
          context.commit("SET_BOOKS", res.data)
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    },

    getBookByTitle(context){
      serverApi.get("/books/search",{
        params: {
          title: this.state.title
        }
      })
      .then(res => {
        context.commit("SET_BOOKS_SEARCH", res.data)
      })
      .catch(err => {
        console.log(err.response.data.message);
      })

    },

    addBookmark(context, payload){
     return serverApi.post("/bookmarks", payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },

    getBookmark(context){
      serverApi.get("/bookmarks", {
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(res => {
        console.log(res);
        context.commit("SET_BOOKMARK", res.data)
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
  },
  modules: {},
});
