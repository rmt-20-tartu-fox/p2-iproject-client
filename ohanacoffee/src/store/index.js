import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    background: ""
  },
  mutations: {
    setProducts(state, data) {
      state.products = data
    },
    setBackground(state, data) {
      state.background = data
    }
  },
  actions: {
    fetchProducts(context) {
      axios.get('http://localhost:3000/products')
      .then(result => {
        context.commit('setProducts', result.data)
      })
    },
    getBackground(context) {
      axios.get('https://foodish-api.herokuapp.com/api/images/dessert')
      .then(result => {
        context.commit('setBackground', result.data)
      })
    }
  }
})

export default store