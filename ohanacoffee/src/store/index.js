import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    background: "",
    transaction_token: ""
  },
  mutations: {
    setProducts(state, data) {
      state.products = data
    },
    setBackground(state, data) {
      state.background = data
    },
    setTransactionToken(state, data) {
      state.transaction_token = data
    }
  },
  actions: {
    fetchProducts(context) {
      axios.get('http://localhost:3000/products')
      .then(result => {
        context.commit('setProducts', result.data)
      })
      .catch(error => {
        console.log(error);
      })
    },
    getBackground(context) {
      axios.get('https://foodish-api.herokuapp.com/api/images/dessert')
      .then(result => {
        context.commit('setBackground', result.data)
      })
      .catch(error => {
        console.log(error);
      })
    },
    getTransactionToken(context, data) {
      console.log(data);
      axios.post(`http://localhost:3000/transactions`, data)
      .then(result => {
        context.commit('setTransactionToken', result.data.transaction_token)
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
})

export default store