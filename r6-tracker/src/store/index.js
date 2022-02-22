/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    operators: [],
    operator: null,
    isLogin: false,
    strats: [],
    strat: null,
    maps: [],
    friend: null,
    myStrats: []
  },
  mutations: {
    SET_OPERATORS(state, payload){
      state.operators = payload
    },
    SET_OPERATOR(state, payload){
      state.operator = payload
    },
    SET_ISLOGIN(state, status){
      state.isLogin = status
    },
    SET_STRATS(state, payload){
      state.strats = payload
    },
    SET_STRAT(state, payload){
      state.strat = payload
    },
    SET_MAPS(state, payload){
      state.maps = payload
    },
    SET_FRIEND(state, payload){
      state.friend = payload
    },
    SET_MYSTRATS(state, payload){
      state.myStrats = payload
    }
  },
  actions: {
    getAllOperators(context, role){
      console.log(role)
      axios.get(`http://localhost:3000/operators?role=${role}`)
        .then((resp) => {
          console.log(resp.data)
          context.commit('SET_OPERATORS', resp.data)
        })
        .catch((err) => {
          console.log(err.response)
        })

    },
    getOneOperator(context, id){
      // console.log(id)
      axios.get(`http://localhost:3000/operators/${id}`)
      .then((resp) => {
        console.log(resp.data)
        context.commit('SET_OPERATOR', resp.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
    },
    userLogin(context, payload){
      return new Promise ((resolve, rejects) => {
        axios.post('http://localhost:3000/users/login', payload)
          .then((resp) => {
            console.log(resp.data)
            localStorage.access_token = resp.data.access_token
            context.commit('SET_ISLOGIN', true)
            resolve()
          })
          .catch((err) => {
            // console.log(err.response)
            rejects(err.response)
          })

      })
    },
    userRegister(context, payload){
      // console.log(payload)
      return new Promise ((resolve, rejects) => {
        axios.post('http://localhost:3000/users/register', payload)
          .then((resp) => {
            console.log(resp.data)
            localStorage.access_token = resp.data.access_token
            context.commit('SET_ISLOGIN', true)
            resolve()
          })
          .catch((err) => {
            // console.log(err.response)
            rejects(err.response)
          })

      })
    },
    getAllStrats(context){
      axios.get('http://localhost:3000/strats')
        .then((resp) => {
          // console.log(JSON.stringify(resp.data, null, 2))
          context.commit('SET_STRATS', resp.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    getOneStrat(context, id){
      // console.log(id)
      axios.get(`http://localhost:3000/strats/${id}`)
        .then((resp) => {
          console.log(resp.data)
          context.commit('SET_STRAT', resp.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    getAllMaps(context){
      axios.get('http://localhost:3000/maps')
        .then((resp) => {
          console.log(resp.data)
          context.commit('SET_MAPS', resp.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
        
    },
    addNewStrat(context, payload){
      console.log(payload)
      return new Promise((resolve, rejects) => {
        axios.post('http://localhost:3000/strats', payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(() => {
            resolve()
          })
          .catch((err) => {
            rejects(err.response)
          })

      })
      
    },
    checkFriend(context, payload){
      console.log(payload, "<<<<")
      axios.post('http://localhost:3000/friends', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then((resp) => {
        console.log(resp.data)
        context.commit('SET_FRIEND', resp.data)
      })
      .catch((err) => {
        console.log(err.response)
      })

    },
    getMyStrats(context){
      axios.get('http://localhost:3000/mystrats', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((resp) => {
          console.log(JSON.stringify(resp.data, null, 2))
          context.commit('SET_MYSTRATS', resp.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    deleteMyStrat(context, id){
      console.log(id)
    }
  },
  modules: {
  }
})
