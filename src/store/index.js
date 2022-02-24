import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import swal from 'sweetalert';

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
        const res = await axios.post("https://walletapp-jnthn.herokuapp.com/users/login", payload)
        if (res.status === 200) {
          context.commit("SET_ISLOGGEDIN", true)
          localStorage.setItem("access_token", res.data.access_token)
          swal('Login Successful')
        }

      } catch (err) {
        if (!Array.isArray(err.response.data.message)) {
          swal(err.response.data.message);
        } else {
          swal(err.response.data.message[0]);
        }
      }
    },
    async registerHandler(context, payload) {
      try {
        await axios.post("https://walletapp-jnthn.herokuapp.com/users/register", payload)

      } catch (err) {
        if (!Array.isArray(err.response.data.message)) {
          swal(err.response.data.message);
        } else {
          swal(err.response.data.message[0]);
        }
      }
    },
    async submitHistory(context, payload) {
      await axios.post('https://walletapp-jnthn.herokuapp.com/histories/data',
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
      try {
        await axios.post('https://walletapp-jnthn.herokuapp.com/balances/data',
          payload,
          {
            headers: {
              'access_token': localStorage.getItem("access_token")
            }
          }
        )
      } catch (err) {
        if (!Array.isArray(err.response.data.message)) {
          swal(err.response.data.message);
        } else {
          swal(err.response.data.message[0]);
        }
      }
    },
    async getUsd(context) {
      try {
        const res = await axios.get('https://walletapp-jnthn.herokuapp.com/additionals/usd',
          {
            headers: {
              'access_token': localStorage.getItem("access_token")
            }
          }
        )
        context.commit("SET_USD", Math.ceil(res.data.USD))
        context.commit("SET_EUR", Math.ceil(res.data.EUR))
      }
      catch (err) {
        if (!Array.isArray(err.response.data.message)) {
          swal(err.response.data.message);
        } else {
          swal(err.response.data.message[0]);
        }
      }
    },

    async getBtc(context) {
      try {
        const res = await axios.get('https://walletapp-jnthn.herokuapp.com/additionals/btc',
          {
            headers: {
              'access_token': localStorage.getItem("access_token")
            }
          }
        )
        context.commit("SET_BTC", Math.ceil(res.data.BTC))
        context.commit("SET_ETH", Math.ceil(res.data.ETH))
      }
      catch (err) {
        if (!Array.isArray(err.response.data.message)) {
          swal(err.response.data.message);
        } else {
          swal(err.response.data.message[0]);
        }
      }
    },
    async getHistoryByBalanceId(context, payload) {
      try {
        const { BalanceId } = payload
        const res = await axios.get(`https://walletapp-jnthn.herokuapp.com/histories/balance/${BalanceId}`,
          {
            headers: {
              'access_token': localStorage.getItem("access_token")
            }
          }
        )
        context.commit("SET_BTC", Math.ceil(res.data.BTC))
        context.commit("SET_ETH", Math.ceil(res.data.ETH))
      }
      catch (err) {
        if (!Array.isArray(err.response.data.message)) {
          swal(err.response.data.message);
        } else {
          swal(err.response.data.message[0]);
        }
      }
    },

    async addBalance(context, payload) {
      try {
        await axios.post('https://walletapp-jnthn.herokuapp.com/histories/data',
          payload,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'access_token': localStorage.getItem("access_token")
            }
          }
        )
      }
      catch (err) {
        if (!Array.isArray(err.response.data.message)) {
          swal(err.response.data.message);
        } else {
          swal(err.response.data.message[0]);
        }
      }
    },
    async fetchHistory(context) {
      try {
        const res = await axios.get("https://walletapp-jnthn.herokuapp.com/histories/data", {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        context.commit("SET_HISTORY", res.data)
      } catch (err) {
        if (!Array.isArray(err.response.data.message)) {
          swal(err.response.data.message);
        } else {
          swal(err.response.data.message[0]);
        }
      }
    },
    async fetchBalance(context) {
      try {

        const res = await axios.get("https://walletapp-jnthn.herokuapp.com/balances/data", {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        context.commit("SET_BALANCE", res.data)
      } catch (err) {
        if (!Array.isArray(err.response.data.message)) {
          swal(err.response.data.message);
        } else {
          swal(err.response.data.message[0]);
        }
      }
    },
    async logoutHandler(context) {
      try {
        context.commit("SET_ISLOGGEDIN", false);
        localStorage.clear();
        swal('Logout Successful')
      } catch (err) {
        if (!Array.isArray(err.response.data.message)) {
          swal(err.response.data.message);
        } else {
          swal(err.response.data.message[0]);
        }
      }
    },
  },
  modules: {},
});
