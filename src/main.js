import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";

const socket = io("https://hotelieur.herokuapp.com");

Vue.config.productionTip = false;

Vue.use(VueSocketIOExt, socket, { store });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
