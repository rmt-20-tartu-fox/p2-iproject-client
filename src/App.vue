<template>
  <div id="app">
    <!-- Navbar -->
    <navigation-bar></navigation-bar>

    <router-view />
    <HFooter></HFooter>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import HFooter from "vue-hacktiv8-footer";
export default {
  components: {
    NavigationBar,
    HFooter,
  },
  methods: {
    checkLogin: function () {
      const token = localStorage.getItem("access_token");
      if (token) {
        this.$store.commit("SET_LOGIN_STATUS", true);
      } else {
        this.$store.commit("SET_LOGIN_STATUS", false);
      }
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>

<style>
:root {
  --clr-dark: #134f5c;
  --clr-dark-sec: #2598b4;
  --clr-bright: #ffffff;
  --clr-bright-sec: #dbdbdb;
  --clr-accent: #ff9900;
  --clr-accent-sec: #ffe77b;
  --clr-accent-darker: #ce022e;
}

/* nav starts */
nav {
  background: rgb(2, 0, 36);
  background: linear-gradient(176deg, rgba(2, 0, 36, 1) 0%, rgba(19, 79, 92, 1) 100%);
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.2);
}
nav div a h1 {
  font-family: Lexend deca;
}
nav div a h1 span,
h1.display-md-5 span {
  color: #ff9900;
}
.navbar ul.navbar-nav a {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem;
  margin-left: 0.5rem;
}
a.navbar-brand h3 {
  color: #ff9900;
}
div .container-fluid a .navbar-brand {
  color: #ff9900;
}
.navbar ul.navbar-nav a.nav-link:hover {
  color: var(--clr-bright);
  border-radius: 0.2rem;
  transform: scaleX(1.01);
}

/* section */
section {
  padding-top: 5rem;
  padding-bottom: 3rem;
  min-height: 100vh;
  background-image: linear-gradient(355deg, var(--clr-bright-sec), var(--clr-bright));
}

/* card */
.card {
  max-width: 22rem;
}
</style>
