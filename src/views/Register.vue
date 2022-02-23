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
            <form >
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
                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <router-link to="/login"
                    class="link-danger">Login</router-link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style>

</style>