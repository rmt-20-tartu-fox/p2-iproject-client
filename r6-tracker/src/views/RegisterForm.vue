<template>
   <form @submit.prevent="userRegister">
    <div class="form-group">
      <label for="exampleInputEmail1">Cool Username</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" v-model="username">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
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

</style>