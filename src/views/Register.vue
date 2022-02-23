<template>
  <section id="signup" class="signup">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3 align-self-center mb-3">
          <h2 class="text-center fw-bold subtitle">Sign Up</h2>
        </div>
        <div class="row justify-content-evenly p-3 mx-5">
          <div class="col col-md-5 bg-white p-4 rounded-xl">
            <form @submit.prevent="sendRegisterData" class="justify-content-center">
              <div class="form-group mt-2">
                <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div class="form-group mt-2">
                <input v-model="password" type="password" class="form-control" placeholder="Password" />
              </div>
              <div class="form-group mt-2">
                <input v-model="dateOfBirth" type="date" class="form-control" placeholder="Date of Birth" />
              </div>
              <div class="d-flex justify-content-center"><button type="submit" class="btn btn-primary mt-2">Sign Up</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
  data: function () {
    return {
      email: "",
      password: "",
      dateOfBirth: "",
    };
  },
  methods: {
    sendRegisterData: async function () {
      await this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
        dateOfBirth: this.dateOfBirth,
      });
      if (this.registration) {
        this.$router.push({ name: "Login" });
      }
    },
  },
  computed: {
    registration: function () {
      return this.$store.state.isRegistered;
    },
  },
};
</script>

<style></style>
