<template>
  <div class="container-sm w-25 mt-5 bg-light p-5">
    <form @submit.prevent="loginButton">
      <h4 class="p-1 text-center">Login page</h4>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          required
          placeholder="yugi@mail.com"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          required
          placeholder="input your password"
        />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
      <hr />
      <router-link to="/register">Register Here!</router-link>
    </form>
  </div>
</template>

<script>
  import Swal from "sweetalert2";
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      loginButton() {
        this.$store
          .dispatch("doLogin", {
            email: this.email,
            password: this.password,
          })
          .then((resp) => {
            console.log(resp);
            localStorage.setItem("access_token", resp.data.access_token);
            this.$store.commit("setIsLogin", true);
            Swal.fire("Success login");
            this.$router.push("/");
          })
          .catch((err) => {
            console.error(err);
          });
      },
    },
  };
</script>

<style></style>
