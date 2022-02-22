<template>
  <div class="register">
    <div class="container-register">
      <div class="header">
        <h1>Fancy Kanban</h1>
      </div>
      <div class="header">
        <h6>Create A New Account</h6>
      </div>
      <form @submit.prevent="register">
        <div class="data-user">
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
        </div>
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
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully registered! Please login.");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
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
</style>
