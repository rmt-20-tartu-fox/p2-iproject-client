<template>
<div>
      <!-- Start Banner Hero -->
      <div class="banner-wrapper bg-light mb-5 pt-5">
          <div id="index_banner" class="banner-vertical-center-index container-fluid">
            <div class="py-5 row d-flex align-items-center">
                <img src="../assets/banner.png" class="img-fluid">
            </div>
          </div>
      </div>
      <!-- End Banner -->
      <h3 class="d-flex justify-content-center"><strong>Recommended Books</strong></h3>
      
      <section class="container pt-5">
        <div class="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3">
        <!-- Start Recent Work -->
        <div v-for="book in booksFilm" :key="book.key" class="col-xl-3 col-md-4 col-sm-6">
            <div class="card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                <img class="card-img" :src="'https://covers.openlibrary.org/b/id/'+book.cover_id+'.jpg'" height="350" width="100">
                <div class="card-img-overlay d-flex align-items-end justify-content-center p-2">
                    <div class="text-left text-dark mx-md-n5">
                        <p class="card-text bg-light rounded-3 px-2">{{book.title.substring(0, 10)}}...</p>
                        <a :href="'https://archive.org/details/'+book.availability.identifier" class="btn btn-sm btn-primary mx-3 px-lg-6">READ</a>
                        <button @click="addBookmark(book.cover_id, book.title)" type="submit" class="btn btn-sm btn-primary mx-3 px-lg-6">ADD</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Recent Work -->
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  computed: {
    booksFilm(){
      return this.$store.state.booksFilm
    },
  },
  created(){
    this.getBookBySubject()
  },
  methods: {
    getBookBySubject(){
      this.$store.dispatch("getBookBySubject")
    },

    addBookmark(bookKey, bookTitle){
      let payload = {
        BookId: bookKey,
        title: bookTitle
      }

      if (!localStorage.access_token) {
        this.$swal.fire({
            title: 'Oops!',
            text: `Please login !`,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        this.$router.push("/login")
      } else {
        this.$store.dispatch("addBookmark", payload)
          .then(res => {
            this.$swal.fire({
              title: 'Good!',
              text: `${res.data.message}`,
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            this.$router.push("/mybook")
          })
          .catch(err =>{
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
}
</script>

<style>

</style>