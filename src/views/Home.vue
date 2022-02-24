<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <movie-list></movie-list> -->
    <div
      class="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]"
    >
      <movie-collections></movie-collections>
    </div>
  </div>
</template>

<script>
import MovieCollections from "../components/MovieCollections.vue";
// import MovieList from "../components/MovieList.vue";

// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    MovieCollections,

    // HelloWorld,
  },
};
</script>
