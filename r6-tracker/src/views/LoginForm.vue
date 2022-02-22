<template>
  <div>
    <form @submit.prevent="userLogin">
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
    <small class="form-text text-muted">Doesn't Have An Account, please <a href="" @click.prevent="toRegister">Register</a></small>
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

</style>
