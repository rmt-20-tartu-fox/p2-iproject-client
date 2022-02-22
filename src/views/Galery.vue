<template>
  <section class="container pt-5">
    <div class="row mt-5">
      <form @submit.prevent="setTitle(); getBookByTitle()" class="col">
        <input v-model="title" class="form-control mr-sm-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div class="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 mt-3">
        <!-- Start Recent Work -->
        <div v-for="book in booksSearch" :key="book.cover_edition_key" class="col-xl-3 col-md-4 col-sm-6">
            <div class="card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                <img class="card-img" :src="'https://covers.openlibrary.org/b/id/'+book.cover_i+'.jpg'" height="350" width="100">
                <div class="card-img-overlay d-flex align-items-end justify-content-center p-2">
                    <div class="text-left text-light">
                        <p class="card-text bg-dark">{{book.title}}</p>
                        <!-- <a :href="'https://archive.org/details/'+book.availability.identifier" class="btn btn-sm btn-warning b-lg-3 px-lg-6">READ</a> -->
                        <span class="btn btn-sm btn-warning b-lg-3 px-lg-6">ADD</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- End Recent Work -->
    </div>
  </section>
</template>

<script>
// import assemblyApi from "../apis/assemblyApi"
export default {
  name: "Galery",
  data(){
    return {
      title: ""
    }
  },

  created(){
    this.getBookByTitle()
    this.title = ""
  },
  computed: {
    booksSearch(){
      return this.$store.state.booksSearch
    }
  },
  methods: {
    getBookByTitle(){
      this.$store.dispatch("getBookByTitle")
    },

    setTitle(){
      let title = this.title
      this.$store.commit("SET_TITLE", title)
    },

    callback(data) {
      console.debug('Event: ',data )
    }
  }
}
</script>

<style>

</style>