<template>
  <div
    class="d-flex justify-content-center align-items-center mt-5"
    id="loginPage"
  >
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
        <div class="card shadow w-100">
          <img
            src="https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt=""
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Register</h5>
            <form class="validated-form" v-on:submit.prevent="registerHandler">
              <div class="mb-3">
                <label for="username" class="form-label">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  autofocus
                  required
                  v-model="register.email"
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  required
                  v-model="register.password"
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-success btn-block">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      register: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    async registerHandler() {
      await this.$store.dispatch("registerHandler", this.register);

      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
#loginPage {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1511184150666-9bb7d41a88f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3538&q=80");
  background-size: cover;
  background-position: center;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}
.cover-container {
  max-width: 60vw;
}

.nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 1rem;
  border-bottom: 0.25rem solid transparent;
}

.nav-link:hover {
  color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.5);
}

.nav-link.active {
  color: white;
  border-bottom-color: white;
}

.btn-secondary,
.btn-secondary:hover {
  color: #333;
  text-shadow: none;
}
</style>
