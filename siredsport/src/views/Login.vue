<template>
  <div>
    <Navbar />
    <Form @onClick="login" :page="page" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Form from "../components/Form.vue"
export default {
  name: "Login",
  components: {
    Navbar,
    Form
  },
  data() {
    return {
      page: "Login"
    }
  },
  methods: {
    login() {
      // const payload = {
      //   email: this.email,
      //   password: this.password,
      //   name: this.name
      // }
      console.log('halo masuk gak');
    }
  }
}
</script>

<style>

</style>