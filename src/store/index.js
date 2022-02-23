import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    histories: [],
    balances: [],
    rateUsd: "",
    rateEur: "",
    rateBtc: "",
    rateEth: "",
    balanceTotal: "",
    spending: "",
    income: "",
    type: ""
  },
  mutations: {
    SET_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload
    },
    SET_HISTORY(state, payload) {
      state.histories = payload
    },
    SET_TYPE(state, payload) {
      state.type = payload
    },
    SET_BALANCE(state, payload) {
      state.balances = payload
    },
    SET_BALANCETOTAL(state, payload) {
      state.balanceTotal = payload
    },
    SET_SPENDING(state, payload) {
      state.spending = payload
    },
    SET_INCOME(state, payload) {
      state.income = payload
    },
    SET_USD(state, payload) {
      state.rateUsd = payload
    },
    SET_EUR(state, payload) {
      state.rateEur = payload
    },
    SET_BTC(state, payload) {
      state.rateBtc = payload
    },
    SET_ETH(state, payload) {
      state.rateEth = payload
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
    async submitHistory(context, payload) {
      await axios.post('http://localhost:3000/histories/data',
        payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'access_token': localStorage.getItem("access_token")
          }
        }
      )
    },
    async submitBalance(context, payload) {
      await axios.post('http://localhost:3000/balances/data',
        payload,
        {
          headers: {
            'access_token': localStorage.getItem("access_token")
          }
        }
      )
    },
    async getUsd(context) {
      const res = await axios.get('http://localhost:3000/additionals/usd',
        {
          headers: {
            'access_token': localStorage.getItem("access_token")
          }
        }
      )
      context.commit("SET_USD", Math.ceil(res.data))
    },
    async getEur(context) {
      const res = await axios.get('http://localhost:3000/additionals/eur',
        {
          headers: {
            'access_token': localStorage.getItem("access_token")
          }
        }
      )
      context.commit("SET_EUR", Math.ceil(res.data))
    },
    async getBtc(context) {
      const res = await axios.get('http://localhost:3000/additionals/btc',
        {
          headers: {
            'access_token': localStorage.getItem("access_token")
          }
        }
      )
      context.commit("SET_BTC", Math.ceil(res.data))
    },
    async getEth(context) {
      const res = await axios.get('http://localhost:3000/additionals/eth',
        {
          headers: {
            'access_token': localStorage.getItem("access_token")
          }
        }
      )
      context.commit("SET_ETH", Math.ceil(res.data))
    },
    async addBalance(context, payload) {
      await axios.post('http://localhost:3000/histories/data',
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
