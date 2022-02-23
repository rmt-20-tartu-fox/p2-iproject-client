<template>
  <div class="cont">
    <navbar></navbar>
    <main class="memes">
      <sidebar></sidebar>
      <router-view />
    </main>
  </div>
</template>

<script>
import "../assets/mainPage.css";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "success",
        title: "See you soon!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    fetchCategories() {
      this.$store.dispatch("fetchCategories");
    },
  },
};
</script>

<style></style>
