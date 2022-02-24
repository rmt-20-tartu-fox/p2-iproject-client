<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="flex w-full min-h-screen font-sans bg-gray-800">
      <side-nav-bar></side-nav-bar>
      <main class="flex flex-col flex-1 gap-6 p-4">
        <header-comp></header-comp>
        <hr class="border-gray-700" />
        <!-- <StatsCard />
      <OrderReport /> -->
        <router-view />
      </main>
      <HFooter></HFooter>
    </div>
  </div>
</template>
<script>
import HeaderComp from "./components/HeaderComp.vue";
import SideNavBar from "./components/SideNavbar.vue";
import HFooter from "vue-hacktiv8-footer";
export default {
  components: { SideNavBar, HeaderComp, HFooter },
  created() {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_IS_LOGIN", true);
    }
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

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
