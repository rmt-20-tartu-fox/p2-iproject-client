<template>
  <div class="meme-card">
    <h3>{{ meme.title }}</h3>
    <hr />
    <img :src="'http://localhost:3000/' + meme.image" alt="meme" />
    <button v-on:click.prevent="addLikes(meme.id)">
      <img
        src="https://cdn-icons.flaticon.com/png/512/2311/premium/2311317.png?token=exp=1645635539~hmac=0a608ede33f837608b05cd655da1a303"
        alt=""
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "MemeCardDb",
  props: ["meme"],
  methods: {
    addLikes(id) {
      this.$store.dispatch("addLikes", id);
    },
  },
};
</script>

<style></style>
