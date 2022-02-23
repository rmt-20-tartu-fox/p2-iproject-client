<template>
  <div class="flex justify-between min-h-screen min-w-screen">
    <div class="w-1/2 bg-gray-100">
      <div
        class="bg-gray-100 flex flex-col block items-center justify-center rounded p-5"
      >
        <BookCard :book="dataBook"></BookCard>
        <!-- <div class="w-2/3 bg-blue-100 h-40 mb-5 mt-12"></div> -->
      </div>
    </div>
    <div class="w-1/2 bg-white flex items-center justify-center">
      <div>
        <form
          action=""
          class="bg-gray-100 flex flex-col block items-center justify-center rounded p-5"
        >
          <label for="" class="mb-5">First Name</label>
          <input
            type="text"
            class="mb-4 w-3/4 rounded border-gray-400 border"
          />
          <label for="" class="mb-5">Last Name</label>
          <input
            type="text"
            class="mb-4 w-3/4 rounded border-gray-400 border"
          />
          <label for="" class="mb-5">No. Telepon </label>
          <input
            type="text"
            class="mb-4 w-3/4 rounded border-gray-400 border"
          />
          <!-- <label for="" class="mb-5">Address</label>
          <textarea name="" class="mb-5" cols="30" rows="10"></textarea> -->
          <input
            type="submit"
            value="Submit"
            class="bg-blue-100 rounded w-3/4 mt-4 py-1"
            id=""
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";
export default {
  name: `Cart`,
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
      },
    };
  },
  components: {
    BookCard,
  },
  created() {
    this.fetchDetailMovie();
    this.$store.commit("SET_PAGE", "Cart");
  },
  methods: {
    fetchDetailMovie() {
      this.$store.dispatch("detailBook", { id: this.$route.params.id });
    },
    payment() {
      this.$store.dispatch("payment", {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        price: this.book.price,
      });
    },
  },
  computed: {
    dataBook() {
      return this.$store.state.book;
    },
    dataPage() {
      return this.$store.state.page;
    },
  },
};
</script>

<style></style>
