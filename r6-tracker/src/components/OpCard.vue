<template>
  <!-- eslint-disable -->
  <div class="card  shadow-lg p-3 mb-5 bg-dark shadow-lg border border-secondary red" style="width: 18rem; border-bottom-left-radius: 75px;">
    <img class="card-img-top" alt="Card image cap" v-bind:src='operator.imageUrl'>
    <div class="card-body " >
      <h5 class="card-title text-dark">{{operator.name}}</h5>
      <button class="btn btn-link btn-outline-primary" v-on:click.prevent='seeDetail(operator.id)'>See Detail</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'OpCard',
  props: ['operator'],
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