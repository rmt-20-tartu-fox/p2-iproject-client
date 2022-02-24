<template>
  <div>
    <Navbar />
    <Form @onClick="register" :page="page" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Form from "../components/Form.vue"
import swal from "sweetalert2"
export default {
  name: "Register",
  components: {
    Navbar,
    Form
  },
  data() {
    return {
      page: "Register"
    }
  },
  methods: {
    register(payload) {
      console.log(payload);
      this.$store.dispatch("register", payload)
      .then(resp => console.log(resp))
      .catch(err => {
        let errors = err.response.data
        console.log(errors);
        if (Array.isArray(errors)) {
          errors = errors[0]
        } else {
          errors = errors.message
        }
        swal.fire({
          icon: 'error',
          title: errors
        })
      })
    }
  }
}
</script>

<style>

</style>