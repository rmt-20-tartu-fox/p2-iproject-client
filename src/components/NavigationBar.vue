<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top px-5">
    <div class="container-fluid px-0">
      <a @click.prevent="clickHandler({ name: 'Home' })" class="navbar-brand pb-0" href="">
        <h1 class="display-6 fs-3 fw-light"><span>Wolfy</span></h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-if="isLoggin" class="nav-item">
            <a @click.prevent="clickHandler({ name: 'Home' })" class="nav-link" aria-current="page" href="">Home</a>
          </li>
          <li v-if="isLoggin" class="nav-item">
            <a @click.prevent="clickHandler({ name: 'MyProfile' })" class="nav-link" href="">My Profile</a>
          </li>
          <li v-if="!isLoggin" class="nav-item">
            <a @click.prevent="clickHandler({ name: 'Register' })" class="nav-link" href="">Register</a>
          </li>
          <li v-if="!isLoggin" class="nav-item">
            <a @click.prevent="clickHandler({ name: 'Login' })" class="nav-link" href="">Sign In</a>
          </li>
          <li v-if="isLoggin">
            <a @click.prevent="logout" class="nav-link" href="">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "NavigationBar",
  methods: {
    clickHandler: function (obj) {
      this.$router.push(obj);
    },

    logout: function () {
      Swal.fire({
        title: "Do you want to log out?",
        showDenyButton: true,
        confirmButtonText: "Stay",
        denyButtonText: `Sign Out`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Thank you for staying!", "", "success");
        } else if (result.isDenied) {
          localStorage.clear();
          this.$store.commit("SET_LOGIN_STATUS", false);
          this.$router.push({ name: "Login" });
          Swal.fire("You are logged out", "", "info");
        }
      });
    },
  },
  computed: {
    isLoggin: function () {
      return this.$store.state.isLoggin;
    },
  },
};
</script>

<style></style>
