<template>
  <div class="content-meme">
    <!-- meme db card -->
    <meme-card-db
      v-for="meme in memes"
      :key="meme.id"
      :meme="meme"
    ></meme-card-db>
  </div>
</template>

<script>
import MemeCardDb from "./MemeCardDb.vue";

export default {
  name: "Memedb",
  components: {
    MemeCardDb,
  },
  created() {
    this.fetchMemesDb();
  },
  computed: {
    memes() {
      return this.$store.state.memesDb;
    },
  },
  methods: {
    fetchMemesDb() {
      this.$store.dispatch("fetchMemesDb");
    },
  },
};
</script>

<style></style>
