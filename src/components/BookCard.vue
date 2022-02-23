<template>
  <div class="w-1/4 bg-blue-100 mr-4 mb-5 ml-4 mt-5 rounded">
    <div>
      <img
        class="w-full rounded rounded-b-none h-1/2"
        :src="book.imageUrl"
        alt=""
      />
    </div>
    <div class="ml-2">
      <p>{{ book.title }}</p>
      <p>{{ formatPrice() }}</p>
      <p>{{ book.language }}</p>
      <p>{{ book.totalTime }}</p>
      <!-- <p>Link for download</p> -->
    </div>
    <button
      class="w-1/3 rounded p-2 bg-blue-300 ml-2 mb-4 mt-3 item-center"
      @click.prevent="buyBook"
    >
      Buy book
    </button>
  </div>
</template>

<script>
export default {
  name: `BookCard`,
  props: ["book"],
  methods: {
    formatPrice() {
      return this.book.price.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
      });
    },
    buyBook() {
      this.$router.push(`/cart/${this.book.id}`);
    },
  },
  // computed: {
  //   dataDetailBook() {
  //     return this.$store.state.book;
  //   },
  // },
};
</script>

<style></style>
