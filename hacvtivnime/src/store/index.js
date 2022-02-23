import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    mangas: [],
    manga: {},
    animes: [],
    anime: {},
    topMangas: [],
    topAnimes: [],
    favoriteMangas: [],
    favoriteAnimes: [],
    paginationManga: {
      page: 1,
      totalPage: 10,
    },
    paginationAnime: {
      page: 1,
      totalPage: 10,
    }
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload
    },
    setPageManga(state, payload) {
      state.paginationManga.page = payload
    },
    setPageAnime(state, payload) {
      state.paginationAnime.page = payload
    },
    setMangas(state, payload){
      state.mangas = payload
    },
    setTopMangas(state, payload){
      state.topMangas = payload
    },
    setMangaDetail(state, payload){
      state.manga = payload
    },
    setAnimes(state, payload){
      state.animes = payload
    },
    setTopAnimes(state, payload){
      state.topAnimes = payload
    },
    setAnimeDetail(state, payload){
      state.anime = payload
    },
    setFavoriteManga(state, payload){
      state.favoriteMangas = payload
    },
    setFavoriteAnime(state, payload) {
      state.favoriteAnimes = payload
    },
  },
  actions: {
    nodeMailer(_, payload) {
      console.log(payload);
      axios.post('/email', payload)
        .then(() => {})
        .catch(err => console.log(err))
    },
    register(context, payload) {
      axios.post('/register', payload)
        .then(resp => {
          context.dispatch('nodeMailer', resp.data)
          router.push('/login')
        })
        .catch(err => {
          console.log(err);
        })
    },
    login(context, payload) {
      axios.post('/login', payload)
        .then(resp => {
          localStorage.setItem('access_token', resp.data.access_token)
          context.commit('setIsLoggedIn', true)
          router.push('/')
        })
        .catch(err => {
          console.log(err);
        })
    },
    getMangas(context) {
      const page = this.state.paginationManga.page
      axios.get(`/mangas?page=${page}`)
        .then(resp => { 
          context.commit('setMangas', resp.data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    getTopMangas(context) {
      axios.get(`/tops/mangas`)
        .then(resp => { 
          context.commit('setTopMangas', resp.data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    getMangaDetail(context, payload) {
      axios.get(`/mangas/${payload}`)
        .then(resp => { 
          context.commit('setMangaDetail', resp.data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    getAnimes(context) {
      const page = this.state.paginationAnime.page
      axios.get(`/animes?page=${page}`)
        .then(resp => { 
          context.commit('setAnimes', resp.data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    getTopAnimes(context) {
      axios.get(`/tops/animes`)
        .then(resp => { 
          context.commit('setTopAnimes', resp.data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    getAnimeDetail(context, payload) {
      axios.get(`/animes/${payload}`)
        .then(resp => { 
          context.commit('setAnimeDetail', resp.data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    addFavoriteManga(context, payload){
      console.log(payload);
      axios.post(`/mangafavorites/${payload}`, {}, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => { 
          router.push('/myfavorite')
        })
        .catch(err => {
          console.log(err);
        })
    },
    addFavoriteAnime(context, payload){
      axios.post(`/animefavorites/${payload}`, {}, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => { 
          router.push('/myfavorite')
        })
        .catch(err => {
          console.log(err);
        })
    },
    getFavoriteManga(context){
      axios.get(`/myfavoritesmangas`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(resp => { 
          context.commit('setFavoriteManga', resp.data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    getFavoriteAnime(context){
      axios.get(`/myfavoritesanimes`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(resp => { 
          context.commit('setFavoriteAnime', resp.data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    deleteMyFavorite(context, id) {
      console.log(id);
      axios.delete(`/myfavorites/${id}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          context.dispatch('getFavoriteManga')
          context.dispatch('getFavoriteAnime')
        })
        .catch(err => {
          console.log(err);
        })
    },  
    payment(context, payload) {
      axios.post('/midtrans', payload, {
        headers : {
          access_token: localStorage.access_token
        }
      })
      .then(resp => {
        window.snap.pay(resp.data.token, {
          onSuccess: function (result) {
            console.log(result);
          },
          onClose: function () {
            alert("you closed the popup without finishing the payment");
          },
        });
      })
      .catch(err => {
        console.log(err);
      })
    },
    logout(context) {
      localStorage.clear()
      context.commit('setIsLoggedIn', false)
      router.push('/login')
    }
  },
  modules: {
  }
})
