import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis"
// import swal from "sweetalert2"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state ,payload) {
      state.products = payload
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
    }
  }
});
