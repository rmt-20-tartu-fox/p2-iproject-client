<template>
  <div class="register">
    <div class="container-register">
      <div class="header">
        <h1>Fancy Kanban</h1>
      </div>
      <div class="header">
        <h6>Log in</h6>
      </div>
      <form @submit.prevent="login">
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
  name: "login",
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((resp) => {
          console.log(resp.data);
          this.$router.push("/board");
        });
      (err) => {
        console.log(err.message);
      };
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
  /* border: 1px solid black; */
}
.header {
  text-align: center;
}
.h1 {
  font-weight: bold;
}
.input-user {
  width: 500px;
  height: 40px;
}
.field-input {
  margin: 10px 0 10px 0;
}
.btn-signup {
  margin-top: 50px;
}
</style>
