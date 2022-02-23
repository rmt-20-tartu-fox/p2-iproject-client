<template>
  <div class="register">
    <div class="container-register">
      <div class="header">
        <h1>Fancy Kanban</h1>
      </div>
      <div class="header">
        <h6>Create A New Account</h6>
      </div>
      <form @submit.prevent="clickRegister">
        <!-- <div class="data-user">
          <div class="field-input">
            <label>Username</label>
          </div>
          <div class="field-input">
            <input
              class="input-user"
              type="text"
              placeholder="Username"
              v-model="username"
            />
          </div>
        </div> -->
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
          <button class="input-user">Sign Up</button>
        </div>
        <div class="container-backhome-link">
          <div class="title-register">
            <h5>already have an account</h5>
          </div>
          <div>
            <router-link to="/">Back To Login</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickRegister() {
      this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
      });
    },
  },
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
};
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 45vw;
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
.title-register {
  padding-right: 10px;
}
.container-backhome-link {
  display: flex;
  align-items: center;
  margin: 30px 0px 0px 0px;
}
</style>
