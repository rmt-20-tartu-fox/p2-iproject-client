<template>
  <div class="meme-card">
    <h3>{{ meme.title }}</h3>
    <hr />
    <img :src="meme.url" alt="meme" />
  </div>
</template>

<script>
export default {
  name: "MemeCard",
  props: ["meme"],
};
</script>

<style></style>
