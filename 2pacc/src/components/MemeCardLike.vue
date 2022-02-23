<template>
  <div class="meme-card card-like">
    <h3>{{ like.Meme.title }}</h3>
    <hr />
    <img :src="'http://localhost:3000/' + like.Meme.image" alt="meme" />
    <button v-on:click.prevent="removeLike(like.id)">
      <img
        src="https://cdn-icons.flaticon.com/png/512/2530/premium/2530005.png?token=exp=1645641958~hmac=259d6d4d26591239b24f02ae345d3012"
        alt=""
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "MemeCardLike",
  props: ["like"],
  methods: {
    removeLike(id) {
      this.$store.dispatch("removeLike", id).then(() => {
        this.getLikes();
      });
    },
    getLikes() {
      this.$store.dispatch("getLikes");
    },
  },
};
</script>

<style></style>
