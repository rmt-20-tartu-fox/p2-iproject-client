<template>
  <section class="vh-100 pt-5">
      <div class="container pt-5">
        <div class="row d-flex justify-content-center align-items-center h-100 py-5 bg-light">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="../assets/library.png" height="400"
              alt="Sample image">
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h2 class="d-flex justify-content-center mb-4">Register</h2>
            <form @submit.prevent="postRegister">
              <div class="form-outline mb-4">
                <input v-model="email" type="email" class="form-control form-control-lg"
                  placeholder="Email address" />
              </div>
              <div class="form-outline mb-3">
                <input v-model="password" type="password" class="form-control form-control-lg"
                  placeholder="Password" />
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="submit" class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <router-link to="/login"
                    class="link-primary">Login</router-link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      email: "",
      password: ""
    }
  },

  methods: {
    postRegister(){
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch("handleRegister", payload)
        .then(res => {
          localStorage.access_token = res.data.access_token
          this.$swal.fire({
            title: 'Good!',
            text: `${res.data.message}`,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.email = ""
          this.password = ""
          this.$router.push("/login")
        })
        .catch(err => {
          this.$swal.fire({
            title: 'Oops!',
            text: `${err.response.data.message[0]}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        })
    }
  }
}
</script>

<style>

</style>