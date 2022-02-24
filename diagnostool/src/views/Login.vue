<template>
  <section class="sign-in my-3">
    <div id="login" class="card my-auto mx-auto">
      <h1>Sign In</h1>
      <h6 class="mb-3">Sign In to access your account</h6>
      <form v-on:submit.prevent="login">
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="example@mail.com"
          />
        </div>
        <div class="mb-4">
          <label class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </section>
</template>

<script>
import api from "../apis/server";
import Swal from "sweetalert2";

export default {
  name: "LoginPage",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      api
        .post("/login", { email: this.email, password: this.password })
        .then((resp) => {
          localStorage.setItem("access_token", resp.data.access_token);
          localStorage.setItem("user", resp.data.user);
          this.$store.commit("setIsLogin", true);
          this.$router.push("/doctor");
        })
        .catch((err) => {
          if (err.response) {
            let text;
            if (Array.isArray(err.response.data.message)) {
              text = err.response.data.message.join("\n");
            } else {
              text = err.response.data.message;
            }
            Swal.fire({
              icon: "error",
              title: "Oops",
              text: text,
            });
          } else if (err.request) {
            console.log(err.request);
          } else {
            console.log(err);
          }
        });
    },
  },
};
</script>

<style>
.sign-in {
  display: flex;
  flex-grow: 1;
}

#login {
  max-height: 380px;
  width: 420px;
  text-align: center;
}
</style>
