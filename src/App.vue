<template>
  <div id="app">
    <div class="navbar-menu flex-row" v-if="$route.path !== '/login'">
      <nav class="navMenu">
        <a href="#"><router-link to="/">home</router-link></a>
        <a href="#" v-if="$store.state.isLogin == true"
          ><router-link to="/bookmark">bookmark</router-link>
        </a>
        <a href="#" v-if="$store.state.isLogin == false">
          <router-link to="/login">login</router-link>
        </a>
        <a href="#" v-if="$store.state.isLogin == true" @click.prevent="logout"
          ><router-link to="/">logout</router-link>
        </a>
        <!-- <div class="dot"></div> -->
       
      </nav>
    </div>
    <router-view />
    <HFooter class="hfooter"></HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  components: {
    HFooter,
  },
  created() {
    if (localStorage.access_token) {
      this.$store.commit("SET_LOGIN", true);
    } else {
      this.$store.commit("SET_LOGIN", false);
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      sessionStorage.clear();
      this.$store.commit("SET_LOGIN", false);
    },
  },
};
</script>

<style>
.hfooter {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 1000;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 90px;
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

/* NAVBAR */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

.navbar-menu {
  background-color: #272727;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: 60px;
}

.navMenu {
  z-index: 1000;
  display: flex;
  max-width: 100%;
  top: 50%;
  left: 50%;
}

.navMenu a {
  color: #f6f4e6;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  width: 150px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.navMenu a:hover {
  color: #fddb3a;
}
</style>
