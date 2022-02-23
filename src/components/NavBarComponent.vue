<template>
  <div>
    <b-navbar style="margin: 0%">
      <b-navbar-brand
        style="color: white; font-family: Arial, Helvetica, sans-serif"
        >NICE REECIPE</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link to="/" style="color: white"
              >Home</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/wishlist" style="color: white"
              >Wish List</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/bmi" style="color: white"
              >BMI</router-link
            ></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em style="color: white">User</em>
            </template>
            <b-dropdown-item href="#" v-if="$store.state.isLogin === false"
              ><router-link to="/login" style="color: white"
                >Login/Register</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item
              style="color: white"
              href="#"
              @click.prevent="logout"
              v-if="$store.state.isLogin === true"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
  </div>
</template>

<script>
export default {
  name: "NavBarComponent",
  created() {
    if (localStorage.access_token) {
      this.$store.commit("setLogin", true);
    }
  },
  computed: {
    // categories() {
    //   return this.$store.state.categories;
    // },
  },

  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit("setLogin", false);
      this.$router.push("/login");
      // this.$router.push("/");
      // Swal.fire({
      //   position: "center",
      //   icon: "success",
      //   title: "Log out from Branded Things",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    },
  },
};
</script>

<style></style>
