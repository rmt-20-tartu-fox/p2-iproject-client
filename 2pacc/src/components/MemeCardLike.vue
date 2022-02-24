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
import Swal from "sweetalert2";

export default {
  name: "MemeCardLike",
  props: ["like"],
  methods: {
    removeLike(id) {
      this.$store.dispatch("removeLike", id).then(() => {
        Swal.fire({
          icon: "success",
          title: "Meme not burned anymore :(",
          showConfirmButton: false,
          timer: 1500,
        });
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
