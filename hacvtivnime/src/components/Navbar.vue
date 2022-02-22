<template>

  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container px-4 px-lg-5">
      <router-link class="navbar-brand" to="/">HacvtivNime</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item"><router-link class="nav-link" to="/anime">Anime</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/manga">Manga</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/myfavorite">My Favorite</router-link></li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/register">Register</router-link></li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="logout" href="3">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
};
</script>

<style>
</style>