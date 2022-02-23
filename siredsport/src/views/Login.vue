<template>
  <div>
    <Navbar />
    <Form @onClick="login" :page="page" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Form from "../components/Form.vue"
import swal from "sweetalert2"

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
    login(payload) {
      const {
        email,
        password
      } = payload
      this.$store.dispatch("login", {
        email,
        password
      })
      .then(resp => {
        localStorage.access_token = resp.data.access_token
        localStorage.name = resp.data.access_token
        localStorage.role = resp.data.role
        this.$router.push({
          name: "Home"
        })
        const Toast = swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Login successfully!",
        });
      })
      .catch(err => {
        swal.fire({
          icon: 'error',
          title: err.response.data.message
        })
      })
    }
  }
}
</script>

<style>

</style>