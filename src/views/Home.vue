<template>
  <div class="home">
    <div class="min-h-screen min-w-screen flex border border-gray-100">
      <div class="bg-white w-1/5">
        <div>
          <label for="" class="ml-5 mt-3 block">Search by title</label>
          <input
            type="text"
            v-model="title"
            class="w-3/4 rounded border border-gray-200 ml-5 mt-4"
          />
          <input
            type="submit"
            value="Submit"
            @click.prevent="searchHandler()"
            class="bg-blue-500 py-1 w-3/4 ml-5 mt-4 rounded hover:bg-blue-300"
          />
          <input
            type="submit"
            value="Clear"
            @click.prevent="clear()"
            class="bg-red-500 py-1 w-3/4 ml-5 mt-4 rounded hover:bg-red-300"
          />
        </div>
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
                @click.prevent="changePage('-')"
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
                @click.prevent="changePage('+')"
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
  data() {
    return {
      title: "",
    };
  },
  components: {
    BookCard,
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      this.$store.dispatch("fetchBooks", {
        page: this.currentPage,
        title: this.title,
      });
    },
    changePage(value) {
      let page = this.currentPage;
      if (value === "-") {
        page--;
        this.$store.commit("SET_CURRENT_PAGE", page);
      } else {
        page++;
        this.$store.commit("SET_CURRENT_PAGE", page);
      }
      this.fetchBooks();
    },
    async searchHandler() {
      // await this.$store.commit("SET_TITLE", this.title);
      await this.$store.commit("SET_CURRENT_PAGE", 1);
      this.fetchBooks();
    },

    clear() {
      this.title = "";
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
