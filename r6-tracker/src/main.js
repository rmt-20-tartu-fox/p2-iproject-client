/* eslint-disable */
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { createApp } from 'vue';
// import YoutubeIframe from '@techassi/vue-youtube-iframe';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
  // createApp(App).use(YoutubeIframe).$mount('#app');
