<template>
  <div class="content-meme">
    <!-- meme db card -->
    <meme-card v-for="meme in memes" :key="meme.id" :meme="meme"></meme-card>
  </div>
</template>

<script>
import MemeCard from "./MemeCard.vue";

export default {
  name: "MemeApi",
  components: {
    MemeCard,
  },
  created() {
    this.fetchMemesApi();
  },
  computed: {
    memes() {
      return this.$store.state.memesApi;
    },
  },
  methods: {
    fetchMemesApi() {
      this.$store.dispatch("fetchMemesApi");
    },
  },
};
</script>

<style></style>
