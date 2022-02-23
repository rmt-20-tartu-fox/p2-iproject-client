<template>
  <div class="container w-25 mt-5 bg-light p-5">
    <form @submit.prevent="registerButton">
      <h4 class="p-1 text-center">Register page</h4>

      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          required
          placeholder="input your name"
        />
      </div>
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

      <button type="submit" class="btn btn-primary">Register</button>
      <hr />
      <router-link to="/login">Back to login</router-link>
    </form>
  </div>
</template>

<script>
  import swal from "sweetalert2";
  export default {
    name: "Register",
    data() {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      registerButton() {
        this.$store
          .dispatch("doRegister", {
            name: this.name,
            email: this.email,
            password: this.password,
          })
          .then((resp) => {
            swal("Success register, please login");
            console.log(resp);
            this.$router.push("/login");
          })
          .catch((err) => {
            console.error(err);
          });
      },
    },
  };
</script>

<style></style>
