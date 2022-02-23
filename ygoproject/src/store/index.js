import Vue from 'vue';
import Vuex from 'vuex';
import localHost from '../../APIs/axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
  },
  actions: {
    doLogin(context, payload) {
      return localHost.post('/users/login', { email: payload.email, password: payload.password });
    },
    doRegister(context, payload) {
      return localHost.post("/users/register", {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
    },
  },
  // modules: {
  // }
});
