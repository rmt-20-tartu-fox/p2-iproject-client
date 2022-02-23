<template>
  <div class="home">
    <div class="min-h-screen min-w-screen flex">
      <div class="bg-white w-1/5">
        <div></div>
      </div>
      <div class="w-4/5 bg-gray-100">
        <h1 class="text-lg m-5">List of book</h1>
        <div class="w-full ml-5 flex flex-wrap">
          <!-- card -->
          <BookCard
            v-for="book in dataBooks"
            :key="book.id"
            :book="book"
          ></BookCard>

          <div class="w-full flex mr-4 h-14">
            <ul class="flex pl-0 list-none rounded my-2 ml-auto">
              <button
                v-if="currentPage > 1"
                @click.prevent="changePage(currentPage - 1)"
                class="relative block py-2 px-3 leading-tight border-r-0 ml-0 rounded-l bg-white"
              >
                Previous
              </button>
              <button
                class="relative block py-2 px-3 leading-tight border-r-0 ml-0 rounded-l bg-blue-600"
              >
                {{ currentPage }}
              </button>
              <button
                v-if="currentPage < dataTotalBooks"
                @click.prevent="changePage(currentPage + 1)"
                class="relative block py-2 px-3 leading-tight border-r-0 ml-0 rounded-l bg-white"
              >
                Next
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookCard from "../components/BookCard.vue";
export default {
  name: "Home",
  components: {
    BookCard,
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      this.$store.dispatch("fetchBooks", { page: this.currentPage });
    },
    changePage(value) {
      this.$store.commit("SET_CURRENT_PAGE", value);
      this.fetchBooks();
    },
  },
  computed: {
    dataBooks() {
      return this.$store.state.books;
    },
    currentPage() {
      return this.$store.state.currentPage;
    },
    dataTotalBooks() {
      return Math.floor(this.$store.state.totalBooks / 10);
    },
  },
};
</script>
