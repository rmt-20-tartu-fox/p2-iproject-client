<template>
  <div class="pt-5">
    <div class="pt-5">
    <h1>My Book Page</h1>
    {{bookmarks}}

    </div>
  </div>
</template>

<script>
export default {
   name: "MyBook",

   created(){
     this.getBookmark()
   },

   computed: {
     bookmarks(){
       return this.$store.state.bookmarks
     }
   },

   methods: {
     getBookmark(){
       this.$store.dispatch("getBookmark")
     },

   }
}
</script>

<style>

</style>