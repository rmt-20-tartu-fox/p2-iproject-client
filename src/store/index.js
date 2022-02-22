import Vue from "vue";
import Vuex from "vuex";
import serverApi from "../apis/serverApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookSubject: []
  },
  mutations: {
    SET_BOOK_SUBJECT(state, payload){
      state.bookSubject = payload
    }
  },
  actions: {
    getBookBySubject(context){
      serverApi.get("/books")
        .then(res => {
          console.log(res.data);
          context.commit("SET_BOOK_SUBJECT", res.data)
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    }
  },
  modules: {},
});
