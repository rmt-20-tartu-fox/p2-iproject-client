<template>
  <div class="container-fluid login">
    <div class="container form-login">
      <h1>LOGIN</h1>
      <div class="container form-login-1">
        <form @submit.prevent="submitLogin">
          <div class="form-group inline">
            <label for="exampleInputEmail1">Email Address</label>
            <div class="email-form">
              <input
                type="email"
                class="form-control shadow"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
          </div>
          <div class="form-group inline">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control shadow"
              id="exampleInputPassword1"
              v-model="password"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-lg">Login</button>
        </form>

        <div class="form-text btn-login register-btn link">
          Back to
          <a href="#">
            <span>
              <router-link to="/">
                <b>Main Page</b>
              </router-link>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  created() {},
  methods: {
    submitLogin() {
      this.$store
        .dispatch("userLogin", {
          email: this.email,
          password: this.password,
        })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("name", data.name);
          this.$store.commit("SET_LOGIN", true);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  padding-bottom: 20px;
  font-weight: 700;
}

.link {
  padding-top: 5px;
}

.shadow {
  box-shadow: 0.5px;
}

.login {
  background-image: url("../assets/images/login.webp");
  background-size: cover;
  height: 88vh;
  padding: 0;
}

.form-login {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 0%;
  height: 100vh;
  justify-content: center;
  background-color: white;
  padding: 0;
}

.form-login-1 {
  display: flex;
  flex-direction: column;
  flex: 0.5;
  padding: 0 15%;
}

.form-login-1 label {
  display: flex;
  justify-content: flex-start;
  padding-left: 15px;
  color: black;
}
</style>
