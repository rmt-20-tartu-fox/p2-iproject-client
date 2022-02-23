import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis"
// import swal from "sweetalert2"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    productById: {}
  },
  mutations: {
    SET_PRODUCTS(state ,payload) {
      state.products = payload
    },
    SET_PRODUCTBYID(state, payload) {
      state.productById = payload
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
        .catch(err => console.log(err))
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
    }
  }
});
