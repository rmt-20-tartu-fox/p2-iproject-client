<template>
  <div class="giant">
    <div class="regPage shadow-lg p-3 mb-5 bg-dark">
      <img src='http://i.imgur.com/aCK8eiA.gif' style="width:265px; padding-top:10px; ">
      <div class="formReg">
        <h1 style="color:white;"><b><i>REGISTER</i></b></h1>

        <form @submit.prevent="userRegister">
          <div class="form-group">
            <label for="exampleInputEmail1" style="color:white;">Cool Username</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" v-model="username">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" style="color:white;">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" style="color:white;">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%">REGISTER</button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'RegisterForm',
  data(){
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  methods: {
    userRegister(){
      console.log(this.email, this.password, this.username)
      let payload = {
        email: this.email,
        password: this.password,
        username: this.username
      }

      this.$store.dispatch('userRegister', payload)
        .then((resp) => {
          this.$router.push({name:'Home'})
        })
        .catch((err) => {
          console.log(err)
        })
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

.regPage{
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

.formReg{
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>