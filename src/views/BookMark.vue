<template>
  <div>
    <div class="container-fluid d-flex">
      <div class="container-fluid row content">
        <div class="container row col-12 mx-auto">
          <book-mark-card 
          v-for="(bookmark, i) in myBookmark"
          :key="bookmark + i"
          :bookmark="bookmark"
          :i="i"
          class="d-flex mt-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookMarkCard from "../components/BooMarkCard.vue";
export default {
  name: "BookMark",
  components: {
    BookMarkCard,
  },
  created() {
    this.$store.dispatch("getMyBookMark");
  },
  computed:{
    myBookmark() {
      return this.$store.state.myBookMark
    }
  }
};
</script>

<style>
</style>