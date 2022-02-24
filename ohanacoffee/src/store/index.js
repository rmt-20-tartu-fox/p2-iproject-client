import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    background: "",
    transaction_token: "",
    categories: [],
    cart: {
      UserId: 4,
      products: {},
      CustomerId: null,
      total: 0
    },
    arrayProducts: []
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
    },
    setCategories(state, data) {
      state.categories = data
    },
    emptyCart(state) {
      state.cart.UserId = null
      state.cart.products = [],
      state.cart.CustomerId = null,
      state.cart.total = 0
    },
    decreaseQuantity(state, id) {
      if(state.cart.products[id].qty < 1) {
        state.cart.products[id] = null
      } else {
        state.cart.products[id].qty--
      }
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
    fetchCategories(context) {
      axios.get('http://localhost:3000/categories')
      .then(result => {
        context.commit('setCategories', result.data)
      })
      .catch(error => {
        console.log(error);
      })
    },
    getBackground(context) {
      axios.get('https://foodish-api.herokuapp.com/api/images/dessert')
      .then(result => {
        context.commit('setBackground', result.data.image)
      })
      .catch(error => {
        console.log(error);
      })
    },
    getTransactionToken(context) {
      axios.post(`http://localhost:3000/transactions`, this.state.cart)
      .then(result => {
        context.commit('setTransactionToken', result.data.transaction_token)
        localStorage.transaction_token = result.data.transaction_token
      })
      .catch(error => {
        console.log(error);
      })
    },
    addToCart(context, product) {
      const {id, name, price, imageUrl} = product
      if(this.state.cart.products[id]) {
        const quantity = this.state.cart.products[id].qty + 1
        this.state.cart.products[id] = {id, price, qty: quantity, name, imageUrl}
      } else {
        this.state.cart.products[id] = {id, price, qty: 1, name, imageUrl}
      }
      this.state.cart.total += price
      let convertProductToArray = Object.values(this.state.cart.products)
      this.state.arrayProducts = convertProductToArray
      context.dispatch('fetchProducts')
    },
    checkOut(context) {
      console.log(this.state.cart.total);
      if(this.state.cart.total < 1) {
        Swal.fire({
          icon: 'error',
          title: 'Cart is Empty',
          text: 'Please buy something first',
        })
      } else {
        context.dispatch('createCart')
        context.dispatch('clearCart')
        router.push({
          name: 'Cart',
          params: {products: this.state.arrayProducts, cart: this.state.cart}
        })
      }
    },
    createCart(context) {
      context.dispatch('getTransactionToken', this.cart)
    },
    clearCart(context) {
      context.commit('emptyCart')
    },
    decreaseQty(context, id) {
      context.commit('decreaseQuantity', id)
      context.dispatch('fetchProducts')
    }
  }
})

export default store