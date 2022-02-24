<template>
  <div>
    <div
      class="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto"
    >
      <h2 classe="font-semibold">Movie Popular</h2>
      <div
        class="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2"
      >
        <movie-item
          v-for="moviePopular in moviesPopular"
          :key="moviePopular.id"
          v-bind:moviePopular="moviePopular"
        ></movie-item>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";
export default {
  components: { MovieItem },
  name: "MovieList",
  computed: {
    moviesPopular() {
      return this.$store.state.moviesPopular;
    },
  },
  methods: {
    fetchDataMoviesPopular() {
      this.$store.dispatch("fetchDataMoviesPopular");
    },
  },
  created() {
    this.fetchDataMoviesPopular();
  },
};
</script>

<style></style>
