import Vue from "vue";
import Vuex from "vuex";
import serverApi from "../apis/serverApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksFilm: [],
    title: "love"
  },
  mutations: {
    SET_BOOKS(state, payload){
      state.booksFilm = payload
    },

    SET_SEARCH_TITLE(state, payload){
      state.title = payload
    }
  },
  actions: {
    getBookBySubject(context){
      serverApi.get("/books")
        .then(res => {
          console.log(res.data);
          context.commit("SET_BOOKS", res.data)
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    }
  },
  modules: {},
});
