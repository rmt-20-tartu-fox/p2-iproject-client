<template>
  <div class="cont">
    <nav>
      <div class="logo">
        <h1>2Pac</h1>
      </div>
      <div class="directory-nav">
        <a href="#">Home</a>
        <a href="#">Shuffle Meme</a>
        <a href="#">Likes</a>
        <a href="#" v-on:click.prevent="logout">Log Out</a>
      </div>
      <div class="profile-nav">
        <h3>Hello username!</h3>
        <a href="#"
          ><img
            id="profile-pict"
            src="https://www.gannett-cdn.com/-mm-/4c5a4c42a2bfd4b8734ba43d210c4db915e078c3/c=0-48-1789-1058/local/-/media/2018/04/19/USATODAY/USATODAY/636597517174443832-XXX-IMG-AP-PEOPLE-TUPACS-WRI-1-1-PNIMTJR4.JPG?width=1320&height=746&fit=crop&format=pjpg&auto=webphttps://www.gannett-cdn.com/-mm-/4c5a4c42a2bfd4b8734ba43d210c4db915e078c3/c=0-48-1789-1058/local/-/media/2018/04/19/USATODAY/USATODAY/636597517174443832-XXX-IMG-AP-PEOPLE-TUPACS-WRI-1-1-PNIMTJR4.JPG?width=1320&height=746&fit=crop&format=pjpg&auto=webphttps://www.gannett-cdn.com/-mm-/4c5a4c42a2bfd4b8734ba43d210c4db915e078c3/c=0-48-1789-1058/local/-/media/2018/04/19/USATODAY/USATODAY/636597517174443832-XXX-IMG-AP-PEOPLE-TUPACS-WRI-1-1-PNIMTJR4.JPG?width=1320&height=746&fit=crop&format=pjpg&auto=webp"
            alt="profile"
        /></a>
      </div>
    </nav>
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

export default {
  name: "Jokes",
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
