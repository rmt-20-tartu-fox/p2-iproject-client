<template>
<!-- eslint-disable -->
  <div class='giant'>
    <div class='loginPage shadow-lg p-3 mb-5 bg-dark'>
      <img src='http://i.imgur.com/aCK8eiA.gif' style="width:265px; padding-top:10px; ">
      
      <div class="formLogin">
        <h1 style="color:white;"><b><i>LOGIN</i></b></h1>
        <form @submit.prevent="userLogin">
          <div class="form-group">
            <label for="exampleInputEmail1" style="color:white;">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" style="color:white;">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%">LOG IN</button>
        </form>
        <div class="toReg">

          <small class="form-text text-muted">Doesn't Have An Account, please <a href="" @click.prevent="toRegister">Register</a></small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'LoginForm',
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    userLogin(){
      console.log(this.email, this.password)
      let payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('userLogin', payload)
        .then(() => {
          console.log("oK")
          this.$router.push({name: 'Home'})
        })
        .catch((err) => {
          console.log(err)
        })
    },
    toRegister(){
      this.$router.push({name: 'RegisterForm'})
    }
  }
}
</script>

<style>
.giant{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.loginPage{
  width: 40%;
  height: 50vh;
  /* align-self: center; */
  margin-top: 200px;
  border-style: solid;
  border-width: thin;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
}

.formLogin{
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.toReg{
  margin-top: 20% !important;
  display: flex !important;
  justify-self: flex-start !important;
}

.blue {
  box-shadow: inset 0 0 1em rgba(0,170,170,0.5), 0 0 1em rgba(0,170,170,0.5);
  border: #0dd solid 5px;
}
</style>
