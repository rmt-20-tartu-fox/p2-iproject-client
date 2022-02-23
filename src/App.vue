<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/historylist">History</router-link> |
      <router-link to="/formcashflow">Data</router-link> |
      <router-link to="/getcashflow"></router-link> |
      <router-link to="/formBalance">Add Balance</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    rateUsd() {
      return this.$store.state.rateUsd;
    },
    rateEur() {
      return this.$store.state.rateEur;
    },
    rateBtc() {
      return this.$store.state.rateBtc;
    },
    rateEth() {
      return this.$store.state.rateEth;
    },
  },
  methods: {
    checkLog() {
      if (localStorage.getItem("access_token")) {
        this.$store.commit("SET_ISLOGGEDIN", true);
      }
    },
    async checkAll() {
      await this.$store.dispatch("getUsd");
      await this.$store.dispatch("getEur");
      await this.$store.dispatch("getBtc");
      await this.$store.dispatch("getEth");
    },
  },
  created() {
    this.checkLog();
    this.checkAll();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
