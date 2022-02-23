<template>
  <section id="signin" class="signin">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3 align-self-center mb-3">
          <h2 class="text-center fw-bold subtitle">Sign In</h2>
        </div>
        <div class="row justify-content-evenly p-3 mx-5">
          <div class="col col-md-4 bg-white p-4 rounded-xl">
            <form @submit.prevent="sendLoginData" class="justify-content-center">
              <div class="form-group mt-2">
                <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div class="form-group mt-2">
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div class="d-flex justify-content-center"><button type="submit" class="btn btn-primary mt-2">Sign In</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    sendLoginData: async function () {
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      if (this.loginStatus) {
        this.$router.push({ name: "ProfileFormCreate" });
      }
    },
  },
  computed: {
    loginStatus: function () {
      return this.$store.state.isLoggin;
    },
  },
};
</script>

<style></style>
