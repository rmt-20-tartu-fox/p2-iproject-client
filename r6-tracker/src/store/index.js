/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';

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
    myStrats: [],
    newses: [],
    news: null
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
    },
    SET_NEWSES(state, payload){
      state.newses = payload
    },
    SET_NEWS(state, payload){
      state.news = payload
    }
  },
  actions: {
    getAllOperators(context, role){
      console.log(role)
      // https://r6-tracker-v1.herokuapp.com/operators
      axios.get(`https://r6-tracker-v1.herokuapp.com/operators?role=${role}`)
        .then((resp) => {
          // console.log("INI PERCOBAAN")
          console.log(resp.data)
          context.commit('SET_OPERATORS', resp.data)
        })
        .catch((err) => {
          swal({
            title: `${err.response.data.message}`,
            icon: "error",
            button: "OK!",
          });
          console.log(err.response.data.message)
        })

    },
    getOneOperator(context, id){
      // console.log(id)
      axios.get(`https://r6-tracker-v1.herokuapp.com/operators/${id}`)
      .then((resp) => {
        let temp = resp.data.videoUrl.split('/')
        resp.data.videoUrl = temp[temp.length - 1]
        console.log(resp.data)
        context.commit('SET_OPERATOR', resp.data)
      })
      .catch((err) => {
        swal({
          title: `${err.response.data.message}`,
          icon: "error",
          button: "OK!",
        });
        console.log(err.response)
      })
    },
    userLogin(context, payload){
      return new Promise ((resolve, rejects) => {
        axios.post('https://r6-tracker-v1.herokuapp.com/users/login', payload)
          .then((resp) => {
            console.log(resp.data)
            localStorage.access_token = resp.data.access_token
            context.commit('SET_ISLOGIN', true)
            swal({
              title: `Welcome Operator`,
              text: `You Are Logged In as ${resp.data.payload.username}!`,
              icon: "success",
              button: "OK!",
            });
            resolve()
          })
          .catch((err) => {
            // console.log(err.response)
            console.log(err.response.data.message)
            swal({
              title: `${err.response.data.message}`,
              icon: "error",
              button: "OK!",
            });
            rejects(err.response)
          })

      })
    },
    userRegister(context, payload){
      // console.log(payload)
      return new Promise ((resolve, rejects) => {
        axios.post('https://r6-tracker-v1.herokuapp.com/users/register', payload)
          .then((resp) => {
            console.log(resp.data)
            localStorage.access_token = resp.data.access_token
            context.commit('SET_ISLOGIN', true)
            swal({
              title: `Welcome Operator`,
              text: `You Are Logged In as ${resp.data.payload.username}!`,
              icon: "success",
              button: "OK!",
            });
            resolve()
          })
          .catch((err) => {
            // console.log(err.response)
            swal({
              title: `${err.response.data.message}`,
              icon: "error",
              button: "OK!",
            });
            rejects(err.response)
          })

      })
    },
    getAllStrats(context){
      axios.get('https://r6-tracker-v1.herokuapp.com/strats')
        .then((resp) => {
          // console.log(JSON.stringify(resp.data, null, 2))
          context.commit('SET_STRATS', resp.data)
        })
        .catch((err) => {
          swal({
            title: `${err.response.data.message}`,
            icon: "error",
            button: "OK!",
          });
          console.log(err.response)
        })
    },
    getOneStrat(context, id){
      // console.log(id)
      axios.get(`https://r6-tracker-v1.herokuapp.com/strats/${id}`)
        .then((resp) => {
          console.log(resp.data)
          context.commit('SET_STRAT', resp.data)
        })
        .catch((err) => {
          swal({
            title: `${err.response.data.message}`,
            icon: "error",
            button: "OK!",
          });
          console.log(err.response)
        })
    },
    getAllMaps(context){
      axios.get('https://r6-tracker-v1.herokuapp.com/maps')
        .then((resp) => {
          console.log(resp.data)
          context.commit('SET_MAPS', resp.data)
        })
        .catch((err) => {
          swal({
            title: `${err.response.data.message}`,
            icon: "error",
            button: "OK!",
          });
          console.log(err.response)
        })
        
    },
    addNewStrat(context, payload){
      console.log(payload)
      return new Promise((resolve, rejects) => {
        axios.post('https://r6-tracker-v1.herokuapp.com/strats', payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(() => {
            resolve()
          })
          .catch((err) => {
            swal({
              title: `${err.response.data.message}`,
              icon: "error",
              button: "OK!",
            });
            rejects(err.response)
          })

      })
      
    },
    checkFriend(context, payload){
      console.log(payload, "<<<<")
      axios.post('https://r6-tracker-v1.herokuapp.com/friends', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then((resp) => {
        console.log(resp.data)
        context.commit('SET_FRIEND', resp.data)
      })
      .catch((err) => {
        swal({
          title: `${err.response.data}`,
          icon: "error",
          button: "OK!",
        });
        console.log(err.response.data)
      })

    },
    getMyStrats(context){
      axios.get('https://r6-tracker-v1.herokuapp.com/mystrats', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((resp) => {
          // console.log(JSON.stringify(resp.data, null, 2))
          
          context.commit('SET_MYSTRATS', resp.data)
        })
        .catch((err) => {
          swal({
            title: `${err.response.data.message}`,
            icon: "error",
            button: "OK!",
          });
          console.log(err.response)
        })
    },
    deleteMyStrat(context, id){
      
      return new Promise ((resolve, rejects) => {
        axios.delete(`https://r6-tracker-v1.herokuapp.com/mystrats/${+id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then((resp) => {
          swal({
            title: `${resp.data.message}`,
            icon: "warning",
            button: "OK!",
          });
          resolve(resp.data.message)
        })
        .catch((err) => {
          swal({
            title: `${err.response.data.message}`,
            icon: "error",
            button: "OK!",
          });
          rejects(err.response)
        })
      })
    },
    getAllNews(context){
      axios.get('https://r6-tracker-v1.herokuapp.com/friends')
        .then((resp) => {
          context.commit('SET_NEWSES', resp.data)
        })
        .catch((err) => {
          swal({
            title: `${err.response.data.message}`,
            icon: "error",
            button: "OK!",
          });
          console.log(err.response)
        })
    },
    getOneNews(context, id){
      axios.get('https://r6-tracker-v1.herokuapp.com/friends')
        .then((resp) => {
          console.log(resp.data[id])
          context.commit('SET_NEWS', resp.data[id])
        })
        .catch((err) => {
          swal({
            title: `${err.response.data.message}`,
            icon: "error",
            button: "OK!",
          });
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
