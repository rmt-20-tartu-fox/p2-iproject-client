<template>
  <section class="container pt-5">
    <div class="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 pt-5">
      <div v-for="item in bookmarks" :key="item.id" class="col-xl-3 col-md-4 col-sm-6">
            <div class="card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                <img class="card-img" :src="'https://covers.openlibrary.org/b/id/'+item.BookId+'.jpg'" height="350" width="100">
                <div class="card-img-overlay d-flex align-items-end justify-content-center p-2">
                    <div class="text-left text-light">
                        <p class="card-text bg-dark">{{item.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
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