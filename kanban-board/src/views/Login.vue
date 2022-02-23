<template>
  <div class="register">
    <div class="container-register">
      <div class="header">
        <h1>Fancy Kanban</h1>
      </div>
      <div class="header">
        <h6>Log in</h6>
      </div>
      <form @submit.prevent="clickLogin">
        <div class="data-user">
          <div class="field-input">
            <label>Email</label>
          </div>
          <div class="field-input">
            <input
              class="input-user"
              type="email"
              placeholder="Email"
              v-model="email"
            />
          </div>
        </div>
        <div>
          <div class="field-input">
            <label>Password</label>
          </div>
          <div class="field-input">
            <input
              class="input-user"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
        </div>
        <div class="btn-signup">
          <button class="input-user">Sign in</button>
        </div>
        <div class="container-register-link">
          <div class="title-register">
            <h5>Don't have an account?</h5>
          </div>
          <div>
            <router-link to="/register">Register here</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    clickLogin() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
}
.header {
  text-align: center;
}
.h1 {
  font-weight: bold;
}
.input-user {
  width: 100%;
  height: 40px;
}
.field-input {
  margin: 10px 0 10px 0;
}
.btn-signup {
  margin-top: 50px;
}
.container-register-link {
  display: flex;
  align-items: center;
  margin: 30px 0px 0px 0px;
}
.title-register {
  padding-right: 10px;
}
</style>
