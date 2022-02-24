import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSpeech from 'vue-speech'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.use(VueSpeech)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
