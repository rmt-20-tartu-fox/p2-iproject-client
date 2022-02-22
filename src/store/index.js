import Vue from "vue";
import Vuex from "vuex";
import serverApi from "../apis/serverApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksFilm: [],
    booksSearch: [],
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
    }
  },
  actions: {
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

    }
  },
  modules: {},
});
