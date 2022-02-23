<template>
    <section class="vh-100 pt-5">
      <div class="container pt-5">
        <div class="row d-flex justify-content-center align-items-center h-100 py-5 bg-light">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="../assets/library.png" height="400"
              alt="Sample image">
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h2 class="d-flex justify-content-center mb-4">Login</h2>
            <form @submit.prevent="checkLogin(); show()">
              <div class="form-outline mb-4">
                <input v-model="email" type="email" class="form-control form-control-lg"
                  placeholder="Enter a valid email address" />
              </div>
              <div class="form-outline mb-3">
                <input v-model="password" type="password" class="form-control form-control-lg"
                  placeholder="Enter password" />
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="submit" class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <router-link to="/register"
                    class="link-danger">Register</router-link></p>
              </div>

              <div class="divider d-flex justify-content-center">
                <p class="text-center fw-bold mx-3 mb-0">OR</p>
              </div>

              <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                
              </div>
            </form>
                <FacebookLogin
                  appId="976814339607748"
                  @login="onLogin"
                  @sdk-loaded="sdkLoaded"
                  version="3.1"
                  type="button"
                  class="btn btn-primary btn-floating mx-1">
                  <i class="fab fa-facebook"></i>
                </FacebookLogin>
                <GoogleLogin :params="params" :onSuccess="onSuccess" type="button" class="btn btn-danger btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </GoogleLogin>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import FacebookLogin from 'facebook-login-vuejs';

export default {
  name: "Login",
  components: {
    GoogleLogin,
    FacebookLogin
  },
  data(){
    return {
      email: "",
      password: "",
      params: {
        client_id: "337335887389-af6plqi8r6h0lgjdrgthijrvrck10kgn.apps.googleusercontent.com"
      },
      isConnected: false,
      nameFb: '',
      emailFb: '',
      personalID: '',
      FB: undefined
    }
  },

  methods: {
    show(){
      this.$emit('show')
    },

    checkLogin(){
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch("handleLogin", payload)
        .then(res => {
          localStorage.access_token = res.data.access_token
          this.email = ""
          this.password = ""
          this.$router.push("/")
        })
    },

    onSuccess(googleUser){
      let access_token = googleUser.getAuthResponse().id_token
      this.$store.dispatch("loginGoogle", access_token)
      .then(resp => {
        localStorage.access_token = resp.data.access_token;
        // this.$swal.fire({
        //     title: 'Good Jobs',
        //     text: `${resp.data.message}`,
        //     icon: 'success',
        //     confirmButtonText: 'Ok'
        //   });
        this.$router.push('/')
        this.show()
      })
      .catch(err => {
        console.log(err.response.data.message);
        // this.$swal.fire({
        //     title: 'Sorry!',
        //     text: `${err.response.data.message}`,
        //     icon: 'error',
        //     confirmButtonText: 'Ok'
        //   });
      })
    },

    getUserData(){
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          this.personalID = userInformation.id;
          this.emailFb = userInformation.email;
          this.nameFb = userInformation.name;
        }
      )
    },

    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },

    onLogin() {
      this.isConnected = true
      this.getUserData()
    },
  }
}
</script>

<style>

</style>