import Vue from "vue";
import Vuex from "vuex";
import localhost from "../../API/axios.js";
import add from 'date-fns/add'
import { format } from 'date-fns'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: "",
    chats: [],
    cities: [],
    citiesForSearch: [],
    hotelAtCity:[],
    weatherAtCity: [],
    total_page_carousel: null,
    page_carousel: null
  },
  mutations: {
    SET_CURRENTUSER(state, user) {
      state.currentUser = user
    },
    SET_CHATS(state, chat) {
      state.chats = chat
    },
    SET_CITIES(state, payload) {
      state.cities = payload
    },
    SET_CITIESFORSEARCH(state, payload) {
      state.citiesForSearch = payload
    },
    SET_TOTALPAGESCAROUSEL(state, payload) {
      state.total_page_carousel = payload
    },
    SET_PAGESCAROUSEL(state, payload) {
      state.page_carousel = payload
    },
    SET_HOTELATCITY(state, payload) {
      state.hotelAtCity = payload
    },
    SET_WEATHER(state, payload) {
      state.weatherAtCity = payload
    }
  },
  actions: {
    getCarousel(context, payload) {
      if (!payload) payload = 1

      localhost.get(`cities?page=${payload}`).then(resp => {
        context.commit("SET_PAGESCAROUSEL", resp.data.page)
        context.commit("SET_TOTALPAGESCAROUSEL", resp.data.total_page)
        context.commit("SET_CITIES", resp.data.rows[0])
      })
    },
    getCity(context) {
      localhost.get(`cities/all`).then(resp => {
        context.commit("SET_CITIESFORSEARCH", resp.data)
      })
    },
    getHotel(context, payload = {}) {
      if (!payload.checkin) {
        payload.checkin = add(new Date(), {
          days: 1,
        })
        payload.checkin = format(new Date(payload.checkin), 'yyyy-MM-dd')
      }
      if (!payload.checkout) {
        payload.checkout = add(new Date(), {
          days: 3,
        })
        payload.checkout = format(new Date(payload.checkout), 'yyyy-MM-dd')
      }

      return localhost.post(`bookings`, payload)
    },
    socket_connect() {
      console.log("Connected", this._vm.$socket);
    },
    socket_disconnect() {
      console.log("Disconnected", this._vm.$socket);
    },
    socket_customEventFromServer(context, payload) {
      console.log("costumEventFromServer", payload);
    },
    socket_chatFromServer(context, payload) {
      context.commit("SET_CHATS", payload)
      console.log(this.state.chats)
    },
    costumEventToServer(context, payload) {
      this._vm.$socket.client.emit("customEventFromClient", payload);
    },
    setCurrentUser(context, payload) {
      context.commit("SET_CURRENTUSER", payload)
      this._vm.$socket.client.emit('setNameOfUser', payload)
    },
    sendMessage(context, payload) {
      this._vm.$socket.client.emit('inputChats', {
        username: this.state.currentUser,
        chat: payload.trim()
      })
    }
  },
  modules: {},
});
