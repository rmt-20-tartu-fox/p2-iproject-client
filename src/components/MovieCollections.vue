<template>
  <div>
    <div class="mt-10 grid lg:grid-cols-5 gap-y-10 gap-x-6 sm:grid-cols-2">
      <movie-thumbnail
        v-for="movie in movies"
        :key="movie.id"
        v-bind:movie="movie"
      ></movie-thumbnail>
    </div>
  </div>
</template>

<script>
import MovieThumbnail from "./MovieThumbnail.vue";
export default {
  components: { MovieThumbnail },
  name: "MovieCollections",
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  methods: {
    fetchDataMovies() {
      this.$store.dispatch("fetchDataMovies");
    },
  },
  created() {
    this.fetchDataMovies();
  },
};
</script>

<style></style>
