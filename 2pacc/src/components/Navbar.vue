<template>
  <nav>
    <div class="logo">
      <h1>2<span>Pac</span></h1>
    </div>
    <div class="directory-nav">
      <a href="#" v-on:click.prevent="changePage('/')">Home</a>
      <a href="#" v-on:click.prevent="changePage('/shuffle')">Shuffle Meme</a>
      <a href="#" v-on:click.prevent="changePage('/jokes')">Jokes</a>
      <a href="#" v-on:click.prevent="changePage('/likes')">Likes</a>
    </div>
    <div class="profile-nav">
      <a href="#" v-on:click.prevent="logout">Log Out</a>
      <h3>Hello {{ this.username }}!</h3>
      <a href="#"
        ><img
          id="profile-pict"
          src="https://www.gannett-cdn.com/-mm-/4c5a4c42a2bfd4b8734ba43d210c4db915e078c3/c=0-48-1789-1058/local/-/media/2018/04/19/USATODAY/USATODAY/636597517174443832-XXX-IMG-AP-PEOPLE-TUPACS-WRI-1-1-PNIMTJR4.JPG?width=1320&height=746&fit=crop&format=pjpg&auto=webphttps://www.gannett-cdn.com/-mm-/4c5a4c42a2bfd4b8734ba43d210c4db915e078c3/c=0-48-1789-1058/local/-/media/2018/04/19/USATODAY/USATODAY/636597517174443832-XXX-IMG-AP-PEOPLE-TUPACS-WRI-1-1-PNIMTJR4.JPG?width=1320&height=746&fit=crop&format=pjpg&auto=webphttps://www.gannett-cdn.com/-mm-/4c5a4c42a2bfd4b8734ba43d210c4db915e078c3/c=0-48-1789-1058/local/-/media/2018/04/19/USATODAY/USATODAY/636597517174443832-XXX-IMG-AP-PEOPLE-TUPACS-WRI-1-1-PNIMTJR4.JPG?width=1320&height=746&fit=crop&format=pjpg&auto=webp"
          alt="profile"
      /></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      username: localStorage.username,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
    changePage(to) {
      this.$router.push(to);
    },
  },
};
</script>

<style></style>
