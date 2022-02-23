<template>
  <div class="cont">
    <navbar></navbar>
    <main class="memes">
      <!-- <div class="sidebar">
        <h1>Categories</h1>
        <button>Funny</button>
      </div> -->
      <sidebar></sidebar>
      <router-view />
    </main>
  </div>
</template>

<script>
import "../assets/mainPage.css";

import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Main",
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      username: localStorage.username,
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
    fetchCategories() {
      this.$store.dispatch("fetchCategories");
    },
  },
};
</script>

<style></style>
