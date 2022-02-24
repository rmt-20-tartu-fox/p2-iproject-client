<template>
  <div class="main mh-100">
    <section class="signup">
      <!-- <img src="images/signup-bg.jpg" alt=""> -->
      <div class="container">
        <div class="signup-content">
          <form method="POST" id="signup-form" class="signup-form">
            <h2 class="form-title">Create account</h2>
            <div class="form-group">
              <input
                type="text"
                class="form-input"
                name="name"
                id="name"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-input"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-input"
                name="yearOfBirth"
                id="yearOfBirth"
                placeholder="Year of Birth | example: 1998"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-input"
                name="password"
                id="password"
                placeholder="Password"
              />
              <span
                toggle="#password"
                class="zmdi zmdi-eye field-icon toggle-password"
              ></span>
            </div>
            <div class="form-group">
              <input
                type="submit"
                name="submit"
                id="submit"
                class="form-submit"
                value="Sign up"
              />
            </div>
          </form>
          <p class="loginhere">
            Have already an account ?
            <a
              href="#"
              class="loginhere-link"
              v-on:click.prevent="changePage('/login')"
              >Login here</a
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "../assets/colorlib-regform-8/fonts/material-icon/css/material-design-iconic-font.min.css";
import "../assets/colorlib-regform-8/css/style.css";

export default {
  name: "Register",
  methods: {
    changePage(to) {
      this.$router.push(to);
    },
  },
};
</script>

<style></style>
