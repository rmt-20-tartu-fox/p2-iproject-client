import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mangas: [],
    manga: {},
    animes: [],
    anime: {},
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
    setPageManga(state, payload) {
      state.paginationManga.page = payload
    },
    setPageAnime(state, payload) {
      state.paginationAnime.page = payload
    },
    setMangas(state, payload){
      state.mangas = payload
    },
    setMangaDetail(state, payload){
      state.manga = payload
    },
    setAnimes(state, payload){
      state.animes = payload
    },
    setAnimeDetail(state, payload){
      state.anime = payload
    },
  },
  actions: {
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
    // getAnimeDetail(context, payload) {
    //   axios.get(`/manga/${payload}`)
    //     .then(resp => { 
    //       context.commit('setMangaDetail', resp.data)
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    // },
  },
  modules: {
  }
})
