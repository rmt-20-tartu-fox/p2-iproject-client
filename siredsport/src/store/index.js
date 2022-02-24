import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis"
import swal from "sweetalert2"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    productById: {},
    carts: [],
    allCities: [],
    allProvinces: [],
    preview: {},
    order: []
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
    },
    SET_ALL_CITIES(state, payload) {
      state.allCities = payload
    },
    SET_ALL_PROVINCES(state, payload) {
      state.allProvinces = payload
    },
    SET_PREVIEW_CHECKOUT(state, payload) {
      state.preview = payload
    },
    SET_ORDER(state, payload) {
      state.order = payload
    }
  },
  actions: {
    fetchProducts(context, payload) {
    console.log("🚀 ~ file: index.js ~ line 30 ~ fetchProducts ~ payload", payload)
      
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/customer/products",
          data: payload
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
    fetchProductById(context, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/customer/products"
        })
        .then(resp => {
          let product = resp.data.filter(el => el.id === +id)
          product[0].price = product[0].price.toLocaleString("id-ID", {style:"currency", currency:"IDR"});
          
          context.commit("SET_PRODUCTBYID", product[0])
        })
        .catch(err => console.log(err, "by id"))
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
    },
    checkoutPreview(context, destination) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/customer/carts/preview`,
          headers: {
            token: localStorage.access_token,
            destination
          },
        })
        .then(resp => {
          console.log(resp);
          resp.data.total = resp.data.total.toLocaleString("id-ID", {style:"currency", currency:"IDR"});
          context.commit("SET_PREVIEW_CHECKOUT", resp.data)
        })
        .catch(err => {
          console.log(err);
          swal.fire({
            icon: 'error',
            timer: 5000,
            title: err.response.data.message
          })
        })
      })
    },
    fetchCity(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/customer/carts/city",
          headers: {
            token: localStorage.access_token,
            province: payload
          }
        })
        .then(resp => {
          context.commit("SET_ALL_CITIES", resp.data.rajaongkir.results)
        })
        .catch(err => {
          swal.fire({
            icon: 'error',
            title: err.response.data.message,
            timer: 5000
          })
        })
      })
    },
    fetchProvince(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/customer/carts/province",
          headers: {
            token: localStorage.access_token
          }
        })
        .then(resp => {
          context.commit("SET_ALL_PROVINCES", resp.data.rajaongkir.results)
        })
        .catch(err => {
          console.log(err, "client");
          swal.fire({
            icon: 'error',
            title: err.response.data.message,
            timer: 5000
          })
        })
      })
    },
    fetchHistories(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/customer/histories",
          headers: {
            token: localStorage.access_token
          }
        })
        .then(resp => {
          context.commit("SET_ORDER", resp.data)
        })
        .catch(err => {
          swal.fire({
            icon: 'error',
            title: err.response.data.message,
            timer: 5000
          })
        })
      })
    },
    oAuth2(context, token) {
      return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: '/customer/login-google-account',
            data: {
              token
            }
          })
          .then(resp => resolve(resp))
          .catch(err => reject(err))
      })
    },
  }
});
