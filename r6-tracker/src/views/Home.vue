<template>
  <!-- eslint-disable -->
  <div class="homePage">
    <button type="button" class='btn btn-warning' @click.prevent="filterOperator('Attacker')">ATTACKER</button>
    <button type="button" class='btn btn-primary'@click.prevent="filterOperator('Defender')">DEFENDER</button>
    <div class="container">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
        <div class="col mb-5"    v-for='operator in operators' v-bind:key='operator.id'>

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
// @ is an alias to /src
/* eslint-disable */

export default {
  name: 'Home',
  created(){
    this.$store.dispatch('getAllOperators',this.role)
  },
  computed: {
    operators(){
      return this.$store.state.operators
    }
  },
  data(){
    return {
      role: ''
    }
  },
  methods: {
    filterOperator(role){
      // console.log(role)
      this.role = role
      this.$store.dispatch('getAllOperators', role)
    },
    seeDetail(id){
      // console.log(id)
      // this.$store.dispatch('getOneOperator', id)
      this.$router.push({name: 'DetailOperator', params: {id}})
    }
  }
}
</script>
