import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    histories: [],
    balances: []
  },
  mutations: {
    SET_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload
    },
    SET_HISTORY(state, payload) {
      state.histories = payload
    },
    SET_BALANCE(state, payload) {
      state.balances = payload
    },
  },
  actions: {
    async loginHandler(context, payload) {
      try {
        const res = await axios.post("http://localhost:3000/users/login", payload)
        if (res.status === 200) {
          context.commit("SET_ISLOGGEDIN", true)
          localStorage.setItem("access_token", res.data.access_token)
        }

      } catch (err) {
        console.log(err.response);
      }
    },
    submitFile(context, payload) {
      axios.post('http://localhost:3000/histories/data',
        payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'access_token': localStorage.getItem("access_token")
          }
        }
      )
    },
    addBalance(context, payload) {
      axios.post('http://localhost:3000/histories/data',
        payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'access_token': localStorage.getItem("access_token")
          }
        }
      )
    }
    ,
    async fetchHistory(context) {
      try {

        const res = await axios.get("http://localhost:3000/histories/data", {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        context.commit("SET_HISTORY", res.data)
      } catch (err) {
        console.log(err);
      }
    },
    async fetchBalance(context) {
      try {

        const res = await axios.get("http://localhost:3000/balances/data", {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        context.commit("SET_BALANCE", res.data)
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
