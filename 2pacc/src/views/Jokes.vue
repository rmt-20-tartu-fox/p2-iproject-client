<template>
  <div class="cont">
    <navbar></navbar>
    <main class="jokes">
      <div>
        <h1>You have 1 of 5 daily jokes remaining</h1>
      </div>
      <div class="jokes-card">
        <h1>{{ joke.setup }}</h1>
        <button v-if="isAnswer == false">Show Punchline</button>
        <h1 v-if="isAnswer == true">{{ joke.punchline }}</h1>
        <button v-if="isAnswer == true">Next Jokes</button>
      </div>
    </main>
  </div>
</template>

<script>
import "../assets/mainPage.css";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Jokes",
  components: {
    Navbar,
  },
  data() {
    return {
      isAnswer: false,
    };
  },
  created() {
    this.fetchJokes();
  },
  computed: {
    joke() {
      return this.$store.state.jokes[localStorage.countJokes];
    },
  },
  methods: {
    fetchJokes() {
      this.$store.dispatch("fetchJokes");
    },
  },
};
</script>

<style></style>
