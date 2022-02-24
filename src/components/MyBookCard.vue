<template>
  <div class="w-1/4 bg-blue-100 mr-4 mb-5 ml-4 mt-5 rounded">
    <div>
      <img
        class="w-full rounded rounded-b-none h-1/2"
        :src="book.Book.imageUrl"
        alt=""
      />
    </div>
    <div class="ml-2">
      <p>{{ book.Book.title }}</p>
      <p>{{ formatPrice }}</p>
      <p>{{ book.Book.language }}</p>
      <p>{{ book.Book.totalTime }}</p>
      <!-- <p>Link for download</p> -->
      <a :href="book.Book.link" class="text-blue-900">Download</a>
    </div>
  </div>
</template>

<script>
export default {
  name: `MyBookCard`,
  props: ["book"],
};
</script>

<style></style>
