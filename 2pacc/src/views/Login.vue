<template>
  <div class="limiter">
    <div class="container-login100 bg-dark">
      <div class="wrap-login100">
        <form class="login100-form validate-form" v-on:submit.prevent="login">
          <span class="login100-form-title p-b-26"> Welcome </span>
          <span class="login100-form-title p-b-48">
            <!-- <i class="zmdi zmdi-font">2Pac</i> -->
            <i>2 <span class="bg-dark text-white p-1.5">Pac</span></i>
          </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is: a@b.c"
          >
            <input class="input100" type="text" name="email" v-model="email" />
            <span class="focus-input100" data-placeholder="Email"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <span class="btn-show-pass">
              <i class="zmdi zmdi-eye"></i>
            </span>
            <input
              class="input100"
              type="password"
              name="pass"
              v-model="password"
            />
            <span class="focus-input100" data-placeholder="Password"></span>
          </div>

          <div class="container-login100-form-btn">
            <div class="wrap-login100-form-btn">
              <div class="login100-form-bgbtn"></div>
              <button class="login100-form-btn bg-dark">Login</button>
            </div>
          </div>

          <div class="text-center p-t-115">
            <span class="txt1"> Don’t have an account? </span>

            <a
              class="txt2"
              href="#"
              v-on:click.prevent="changePage('/register')"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

// css
import "../assets/Login_v2/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/Login_v2/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../assets/Login_v2/fonts/iconic/css/material-design-iconic-font.min.css";
import "../assets/Login_v2/vendor/animate/animate.css";
import "../assets/Login_v2/vendor/css-hamburgers/hamburgers.min.css";
import "../assets/Login_v2/vendor/animsition/css/animsition.min.css";
import "../assets/Login_v2/vendor/select2/select2.min.css";
import "../assets/Login_v2/css/util.css";
import "../assets/Login_v2/css/main.css";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const payload = { email: this.email, password: this.password };
      this.$store
        .dispatch("login", payload)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Log In successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err.error, "<<<<<<<");
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "Please check your email or password",
            showConfirmButton: true,
          });
        });
    },
    changePage(to) {
      this.$router.push(to);
    },
  },
};
</script>

<style></style>
