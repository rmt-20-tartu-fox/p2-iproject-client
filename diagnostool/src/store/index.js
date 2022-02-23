import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: localStorage.access_token ? localStorage.access_token : null,
    diagnoseResult: [],
    nearby: [],
    chats: [
      {
        id: 1,
        author: "Doctor",
        contents: "Selamat datang, silahkan chat keluhan anda",
        imageUrl: "",
        date: "09:00:36",
      },
    ],
  },
  mutations: {
    setIsLogin(state, payload) {
      state.isLogin = payload;
    },
    setDiagnoseResult(state, payload) {
      state.diagnoseResult = payload;
    },
    setNearby(state, payload) {
      state.nearby = payload;
    },
    SOCKET_SENDTOCLIENT(state, newMsg) {
      // console.log("dari store, send to client");
      state.chats.push(newMsg);
      // console.log(newMsg, "Payload 0 dari store");
      // console.log(state.chats);
    },
  },
  actions: {
    //* Socket
    //! kalau listen, penamaan wajib mengikuti aturan
    socket_connect() {
      console.log("connected", this._vm.$socket);
    },

    socket_disconnect() {
      console.log("Disconnected", this._vm.$socket);
    },

    //? Ini untuk mengirim, bukan listen
    sendCustomEventToServer(_, payload) {
      this._vm.$socket.client.emit("customeEventFromClient", payload);
    },
  },
  modules: {},
});
