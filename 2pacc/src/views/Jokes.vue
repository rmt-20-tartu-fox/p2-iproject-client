<template>
  <div class="cont">
    <navbar></navbar>
    <main class="jokes">
      <div class="jokes-header">
        <h1>Dad jokes to ruin your day!</h1>
      </div>
      <div class="jokes-card">
        <h1>{{ joke.setup }}</h1>
        <br />
        <button
          v-if="isAnswered == false"
          v-on:click.prevent="changeIsAnswered(true)"
        >
          Show Punchline
        </button>
        <br />
        <h1 v-if="isAnswered == true">{{ joke.punchline }}</h1>
        <br />
        <button
          v-if="isAnswered == true"
          v-on:click.prevent="
            changeIsAnswered(false);
            fetchJokes();
          "
        >
          Next Jokes
        </button>
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
      isAnswered: false,
    };
  },
  created() {
    this.fetchJokes();
  },
  computed: {
    joke() {
      return this.$store.state.jokes[0];
    },
  },
  methods: {
    fetchJokes() {
      this.$store.dispatch("fetchJokes");
    },
    changeIsAnswered(to) {
      this.isAnswered = to;
    },
  },
};
</script>

<style></style>
