<template>

  <div>
    <div v-if='news === null'>
      <img src='http://i.imgur.com/aCK8eiA.gif'>
    </div>
    <div v-if='news !== null'>
      <img v-bind:src="news.thumbnail.url" alt="">
      <p style="color: white; background-color:grey; text-align: left;"><span v-html="news.content"></span></p>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'News',
  created(){
    this.$store.dispatch('getOneNews', this.$route.params.id)
  },
  computed: {
    news(){
      return this.$store.state.news
    }
  }
}
</script>

<style>

</style>
