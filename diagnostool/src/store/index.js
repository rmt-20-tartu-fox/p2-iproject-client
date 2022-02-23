import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    diagnoseResult: [],
    nearby: [],
  },
  mutations: {
    setDiagnoseResult(state, payload) {
      state.diagnoseResult = payload;
    },
    setNearby(state, payload) {
      state.nearby = payload;
    },
  },
  actions: {},
  modules: {},
});
