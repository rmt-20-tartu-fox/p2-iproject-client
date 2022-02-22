import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/compat/app";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.prototype.$axios = axios;

const firebaseConfig = {
  apiKey: "AIzaSyAzJextbcUuzDkPFNiGGUMR2bbMb4oxrM8",
  authDomain: "kanban-board-jimmy.firebaseapp.com",
  projectId: "kanban-board-jimmy",
  storageBucket: "kanban-board-jimmy.appspot.com",
  messagingSenderId: "1021114775150",
  appId: "1:1021114775150:web:632ef68cc9e72263e1187f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
