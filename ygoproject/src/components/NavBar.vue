<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand @click.prevent="goHome" href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click.prevent="goMyDeck">Build your deck</b-nav-item>
          <b-nav-item href="#">Card list</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="this.$store.state.isLogin === true">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="doLogout" href="#"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-navbar-nav class="px-2" v-if="this.$store.state.isLogin === false">
            <b-navbar-brand @click.prevent="goLogin" href="#"
              >Login</b-navbar-brand
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import Swal from "sweetalert2";
  export default {
    name: "Navbar",
    methods: {
      doLogout() {
        localStorage.clear();
        this.$store.commit("setIsLogin", false);
        Swal.fire("Success logout");
      },
      goLogin() {
        this.$router.push("/login");
      },
      goHome() {
        this.$router.push("/");
      },
      goMyDeck() {
        this.$router.push("/deck");
      },
    },
  };
</script>

<style></style>
