<template>
  <div id="nav">
  <b-navbar toggleable="lg" type="light mt-1">
    <b-navbar-brand href="/" style="font-weight: bold; font-size: 30px;" class="mx-5 text-light">siredsport</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-nav-form class="my-1 mx-5" v-if="page" @submit.prevent="filterByName">
        <b-form-input v-model="name" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mx-5">
        <b-nav-item class="">
          <router-link to="/Cart" class="text-light mx-4">
            <b-icon icon="cart2" variant="light" aria-hidden="true"></b-icon> Cart
          </router-link>
        </b-nav-item>
          <b-nav-item class="">
          <router-link to="/order" class="text-light">
            <b-icon icon="list" variant="light" aria-hidden="true"></b-icon> Order
          </router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link to="/login" v-if="!isLogin">
            <button class="btn btn-outline-light">Login</button>
          </router-link>
        </b-nav-item>
          <b-nav-item href="#" class="">
            <router-link to="/register" v-if="!isLogin">
              <button class="btn btn-outline-light">Register</button>
            </router-link>
        </b-nav-item>
          <b-nav-item class="">
          <router-link to="/Cart" class="text-light">
            <b-icon @click="handleLogout" icon="arrow-left-square" variant="light" aria-hidden="true"></b-icon> Logout
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import swal from "sweetalert2"
export default {
  name: "Navbar",
  props: ["page"],
  data() {
    return {
      name: ""
    }
  },
  computed: {
    isLogin() {
      if (localStorage.access_token) {
        return true
      } else {
        return false
      }
    },
    filterByName() {
      console.log('masuk');
      // this.$store.dispatch("fetchProducts", {
      //   name: this.name
      // })
    },
    // handleLogout() {
    //   console.log('halo guys');
    //   localStorage.clear()
    //   const Toast = swal.mixin({
    //     toast: true,
    //     position: "top-end",
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener("mouseenter", swal.stopTimer);
    //       toast.addEventListener("mouseleave", swal.resumeTimer);
    //     },
    //   });

    //   Toast.fire({
    //     icon: "success",
    //     title: "Logout",
    //   });
    // }
  }
}
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
  /* font-weight: bold; */
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>