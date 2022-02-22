<template>
  <!-- eslint-disable  -->
  <div v-if='strat !== null'>
    <img v-bind:src='strat.Map.imgUrl'>

    <div class="container">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-5 row-cols-xl-5 justify-content-center" style="width:100%;">
        <div class="col mb-5"    v-for='operator in strat.myOperators' v-bind:key='operator.id'>

          <div class="card  shadow-lg p-3 mb-5 bg-dark shadow-lg border border-secondary red" style="width: 18rem; border-bottom-left-radius: 75px;">
            <img class="card-img-top" alt="Card image cap" v-bind:src='operator.imageUrl'>
            <div class="card-body " >
              <h5 class="card-title text-dark">{{operator.name}}</h5>
              <button class="btn btn-link btn-outline-primary" v-on:click.prevent='seeDetail(operator.id)'>See Detail</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'StratDetail',
  created(){
    this.$store.dispatch('getOneStrat', this.$route.params.id)
  },
  computed: {
    strat(){
      return this.$store.state.strat
    }
  },
  methods: {
    seeDetail(id){
      // console.log(id)
      // this.$store.dispatch('getOneOperator', id)
      this.$router.push({name: 'DetailOperator', params: {id}})
    }
  }
}
</script>

<style>

</style>
