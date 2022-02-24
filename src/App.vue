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
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_IS_LOGIN", true);
    }
  },
};
</script>

<style></style>
