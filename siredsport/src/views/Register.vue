<template>
  <div>
    <Navbar />
    <Form :page="page" />
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
      page: "Register"
    }
  }
}
</script>

<style>

</style>