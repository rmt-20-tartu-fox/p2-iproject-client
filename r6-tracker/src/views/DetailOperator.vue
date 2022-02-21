<template>
<!-- eslint-disable  -->
  <div v-if='operator !== null'>
    <img v-bind:src='operator.imageUrl'>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'DetailOperator',
  created(){
    this.$store.dispatch('getOneOperator', this.$route.params.id)
  },
  computed: {
    operator(){
      return this.$store.state.operator
    }
  }
}
</script>

<style>

</style>
