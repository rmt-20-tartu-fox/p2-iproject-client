<template>
  <div class="flex justify-between min-h-screen min-w-screen">
    <div class="w-1/2 bg-gray-100">
      <div
        class="bg-gray-100 flex flex-col block items-center justify-center rounded p-5"
      >
        <div class="w-2/3 bg-blue-100 h-40 mb-5 mt-12"></div>
        <div class="w-2/3 bg-blue-100 h-40 mb-5"></div>
        <div class="w-2/3 bg-blue-100 h-60 mb-5"></div>
      </div>
    </div>
    <div class="w-1/2 bg-white flex items-center justify-center">
      <div>
        <form
          action=""
          class="bg-gray-100 flex flex-col block items-center justify-center rounded p-5"
        >
          <label for="" class="mb-5">Name</label>
          <input type="text" class="mb-5" />
          <label for="" class="mb-5">No. Telepon </label>
          <input type="text" class="mb-5" />
          <label for="" class="mb-5">Address</label>
          <textarea name="" class="mb-5" cols="30" rows="10"></textarea>
          <input
            type="submit"
            value="Submit"
            class="bg-blue-100 rounded w-3/4"
            id=""
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `Cart`,
  created() {
    this.fetchDetailMovie();
  },
  methods: {
    fetchDetailMovie() {
      this.$store.dispatch("detailBook", { id: this.$route.params.id });
    },
  },
};
</script>

<style></style>
