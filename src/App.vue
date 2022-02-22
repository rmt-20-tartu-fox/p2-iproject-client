<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: `App`,
  components: {
    Navbar,
  },
  computed: {
    isLoginPage() {
      return this.$store.state.isLoginPage;
    },
  },
};
</script>

<style></style>
