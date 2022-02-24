<template>
  <div class="cont">
    <navbar></navbar>
    <main class="likes">
      <div>
        <h1>You have 1 of 5 daily jokes remaining</h1>
      </div>
      <div class="memeLikes">
        <meme-card-like
          v-for="like in likes"
          :key="like.id"
          :like="like"
        ></meme-card-like>
      </div>
    </main>
  </div>
</template>

<script>
import "../assets/mainPage.css";

import Navbar from "../components/Navbar.vue";
import MemeCardLike from "../components/MemeCardLike.vue";

export default {
  name: "Likes",
  components: {
    Navbar,
    MemeCardLike,
  },
  computed: {
    likes() {
      return this.$store.state.likes;
    },
  },
  created() {
    this.getLikes();
  },
  methods: {
    getLikes() {
      this.$store.dispatch("getLikes");
    },
  },
};
</script>

<style></style>
