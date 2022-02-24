<template>
  <section class="container pt-5 vh-100">
    <div class="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 pt-5">
      <div v-if="!bookmarks.length" class="d-flex justify-content-center mt-5 pt-5">
        <h1>No book lists yet!</h1>
      </div>
      <div v-for="item in bookmarks" :key="item.id" class="col-xl-3 col-md-4 col-sm-6">
            <div class="card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                <img class="card-img" :src="'https://covers.openlibrary.org/b/id/'+item.BookId+'.jpg'" height="350" width="100">
                <div class="card-img-overlay d-flex align-items-end justify-content-center p-2">
                    <div class="text-left text-dark mx-md-n5">
                        <p class="card-text bg-light rounded-3 px-2">{{item.title.substring(0, 10)}}...</p>
                        <button @click="deleteBookmark(item.id)" type="submit" class="btn btn-sm btn-danger mx-3 px-lg-6">Remove</button>
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

     deleteBookmark(bookmarkId){
       this.$store.dispatch("deleteBookmark", bookmarkId)
        .then(() => {
          this.$swal.fire({
            title: 'Good!',
            text: `Book success to remove from My Book`,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.getBookmark()
        })
        .catch(err => {
          this.$swal.fire({
            title: 'Oops!',
            text: `${err.response.data.message}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        })
     }

   }
}
</script>

<style>

</style>