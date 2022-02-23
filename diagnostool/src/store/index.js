import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    diagnoseResult: [],
  },
  mutations: {
    setDiagnoseResult(state, payload) {
      state.diagnoseResult = payload;
    },
  },
  actions: {},
  modules: {},
});
