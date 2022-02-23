import Vue from 'vue';
import Vuex from 'vuex';
import localHost from '../../APIs/axios';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    cards: [],
    rows: null,
    perPage: 12,
    currentPage: 1,
    nextOffset: ''

  },
  mutations: {
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
    setCards(state, cards) {
      state.cards = cards;
    },
    setRows(state, rows) {
      state.rows = rows;
    },
    setCurrentpage(state, currentPage) {
      state.currentPage = currentPage;
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
    fetchCards(context, payload) {
      let url;
      if (payload.name && payload.desc && payload.type) {
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=${(context.state.currentPage - 1) * 12}&fname=${payload.name}&desc=${payload.desc}&type=${payload.type}`;
      } else if (payload.name && payload.desc) {
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=${(context.state.currentPage - 1) * 12}&fname=${payload.name}&desc=${payload.desc}`;
      } else if (payload.desc && payload.type) {
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=${(context.state.currentPage - 1) * 12}&desc=${payload.desc}&type=${payload.type}`;
      } else if (payload.name && payload.type) {
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=${(context.state.currentPage - 1) * 12}&fname=${payload.name}&type=${payload.type}`;
      } else if (payload.name) {
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=${(context.state.currentPage - 1) * 12}&fname=${payload.name}`;
      } else if (payload.desc) {
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=${(context.state.currentPage - 1) * 12}&desc=${payload.desc}`;
      } else if (payload.type) {
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=${(context.state.currentPage - 1) * 12}&type=${payload.type}`;
      } else {
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=${(context.state.currentPage - 1) * 12}`;
      }
      axios.get(url)
        .then(resp => {
          console.log(resp.data);
          context.commit('setCards', resp.data.data);
          context.commit('setRows', resp.data.meta.total_rows);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  // modules: {
  // }
});
