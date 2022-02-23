<template>
  <div class="min-h-screen min-w-screen flex">
    <div class="w-full bg-gray-100">
      <h1 class="text-lg m-5">List of My book</h1>
      <div class="w-full ml-5 flex flex-wrap">
        <!-- card -->
        <MyBookCard
          v-for="book in dataMyBook"
          :key="book.id"
          :book="book"
        ></MyBookCard>
      </div>
    </div>
  </div>
</template>

<script>
import MyBookCard from "../components/MyBookCard.vue";
export default {
  name: `MyBook`,
  components: {
    MyBookCard,
  },
  methods: {
    fetchMyBook() {
      this.$store.dispatch("fetchMyBook");
    },
  },
  created() {
    this.fetchMyBook();
  },
  computed: {
    dataMyBook() {
      return this.$store.state.myBook;
    },
  },
};
</script>

<style></style>
