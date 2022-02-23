<template>
  <!-- eslint-disable -->
  <div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Role</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Operators</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Map</th>
          <th scope="col">See Detail</th>
          <th scope="col">BAN</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for='strat in strats' v-bind:key='strat.id'>
          <td>{{strat.id}}</td>
          <td>{{strat.currentRole}}</td>
          <td v-for='myOperator in strat.myOperators' v-bind:key='myOperator.id'><img v-bind:src='myOperator.iconUrl' style="width:100px"> </td>
          <td><img v-bind:src='strat.Map.imgUrl' style="width:100px"> <br>{{strat.Map.name}}</td>
          <td><button type="button" class="btn btn-warning" style="color:white;" @click.prevent="stratDetail(strat.id)">DETAIL</button></td>
          <td><button type="button" class="btn btn-danger" style="color:white;" @click.prevent="deleteMyStrat(strat.id)">BAN THIS STRAT</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MyStrat',
  created(){
    if (localStorage.access_token){
      this.$store.commit('SET_ISLOGIN', true)
      this.$store.dispatch('getMyStrats')
    }
  },
  computed: {
    strats(){
      return this.$store.state.myStrats
    }
  },
  methods: {
    stratDetail(id){
      this.$router.push({name: 'StratDetail', params: {id}})
    },
    deleteMyStrat(id){
      
      this.$store.dispatch('deleteMyStrat', id)
        .then((resp) => {
          console.log(resp)
          let strats = this.$store.state.myStrats.filter((el) => {
            return el.id !== id
          })

          this.$store.commit('SET_MYSTRATS', strats)
          console.log(strats)
          // this.$store.dispatch('getMyStrats')
          
        })
        .catch((err) => {
          console.log(err)
        })

    }
  }
}
</script>

<style>

</style>
