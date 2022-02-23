import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis"
import swal from "sweetalert2"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    productById: {},
    carts: []
  },
  mutations: {
    SET_PRODUCTS(state ,payload) {
      state.products = payload
    },
    SET_PRODUCTBYID(state, payload) {
      state.productById = payload
    },
    SET_CART(state, payload) {
      state.carts = payload
    }
  },
  actions: {
    fetchProducts(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/customer/products"
        })
        .then(resp => {
          resp.data.forEach(el => {
            el.price = el.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"});
          });
          context.commit("SET_PRODUCTS", resp.data)
        })
        .catch(err => {
          swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
      })
    },
    fetchProductById(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/customer/products"
        })
        .then(resp => {
          resp.data.price = resp.data.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"});
          context.commit("SET_PRODUCTBYID", resp.data)
        })
        .catch(err => console.log(err))
      })
    },
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/customer/login",
          data: payload
        })
        .then(resp => resolve(resp))
        .catch(err => reject(err))
      })
    },
    register(context, payload) {
      console.log(payload, "disini");
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "/customer/register",
          data: payload
        })
        .then(resp => resolve(resp))
        .catch(err => reject(err))
      })
    },
    payment() {
      return new Promise((resolve, reject) => {
        axios({
          headers: {
            token: localStorage.access_token
          },
          method: "put",
          url: "/customer/carts/checkout"
        })
        .then(resp => resolve(resp))
        .catch(err => reject(err))
      })
    },
    addCart(context, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `/customer/carts/${id}`,
          headers: {
            token: localStorage.access_token
          }
        })
        .then(resp => resolve(resp))
        .catch(err => reject(err))
      })
    },
    fetchCart(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: '/customer/carts',
          headers: {
            token: localStorage.access_token
          }
        })
        .then(resp => {
          resp.data.carts.forEach(el => {
            el.Product.price = el.Product.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"});
          });
          context.commit("SET_CART", resp.data.carts)
        })
        .catch(err => reject(err))
      })
    },
    incrementQuantity(context, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PATCH",
          url: `/customer/carts/${id}/increment`,
          headers: {
            token: localStorage.access_token
          }
        })
        .then(resp => {

        })
        .catch(err => {
          swal.fire({
            icon: 'error',
            timer: 5000,
            title: err.response.data.message
          })
        })
      })
    },
    decrementQuantity(context, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PATCH",
          url: `/customer/carts/${id}/decrement`,
          headers: {
            token: localStorage.access_token
          }
        })
        .then(resp => {
          
        })
        .catch(err => {
          swal.fire({
            icon: 'error',
            timer: 5000,
            title: err.response.data.message
          })
        })
      })
    },
    deleteById(context, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: "DELETE",
          url: `customer/carts/${id}`,
          headers: {
            token: localStorage.access_token
          }
        })
        .then(resp => {
          context.dispatch("fetchCart")
        })
        .catch(err => {
          swal.fire({
            icon: 'error',
            timer: 5000,
            title: err.response.data.message
          })
        })
      })
    },
    deleteAll(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: "DELETE",
          url: `customer/carts`,
          headers: {
            token: localStorage.access_token
          }
        })
        .then(resp => {
          context.dispatch("fetchCart")
        })
        .catch(err => {
          swal.fire({
            icon: 'error',
            timer: 5000,
            title: err.response.data.message
          })
        })
      })
    },
    selectCart(context, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PATCH",
          url: `customer/carts/${id}/select`,
          headers: {
            token: localStorage.access_token
          }
        })
        .then(resp => {
          context.dispatch("fetchCart")
        })
        .catch(err => {
          swal.fire({
            icon: 'error',
            timer: 5000,
            title: err.response.data.message
          })
        })
      })
    },
    unselectCart(context, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: "PATCH",
          url: `customer/carts/${id}/unselect`,
          headers: {
            token: localStorage.access_token
          }
        })
        .then(resp => {
          context.dispatch("fetchCart")
        })
        .catch(err => {
          swal.fire({
            icon: 'error',
            timer: 5000,
            title: err.response.data.message
          })
        })
      })
    }
  }
});
