<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Wallet App</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active" v-if="isLoggedIn">
          <router-link class="nav-link" to="/formcashflow"
            >New Data</router-link
          >
        </li>
        <li class="nav-item active" v-if="isLoggedIn">
          <router-link class="nav-link" to="/formBalance"
            >New Balance</router-link
          >
        </li>
        <li class="nav-item active" v-if="isLoggedIn">
          <router-link class="nav-link" to="/historylist">History</router-link>
        </li>
        <li class="nav-item active" v-if="isLoggedIn">
          <router-link class="nav-link" to="/balancelist">Balance</router-link>
        </li>
        <li class="nav-item active">
          <router-link
            class="nav-link"
            v-if="isLoggedIn"
            to="/login"
            v-on:click.native="logoutHandler"
            >Logout</router-link
          >
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" v-if="!isLoggedIn" to="/register"
            >Register</router-link
          >
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" v-if="!isLoggedIn" to="/login"
            >Login</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    async logoutHandler() {
      await this.$store.dispatch("logoutHandler");
    },
  },
};
</script>

<style></style>
