/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    operators: [],
    operator: null
  },
  mutations: {
    SET_OPERATORS(state, payload){
      state.operators = payload
    },
    SET_OPERATOR(state, payload){
      state.operator = payload
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
    }
  },
  modules: {
  }
})
