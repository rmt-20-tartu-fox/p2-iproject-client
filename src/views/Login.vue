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
            <form @submit.prevent="checkLogin">
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
                    class="link-primary">Register</router-link></p>
              </div>

              <div class="d-flex flex-row justify-content-center justify-content-lg-start">
                <p class="lead fw-normal mb-0 me-3 text-center">Sign in with</p>
              </div>
            </form>
                <VFacebookLogin
                  :async-delay="500"
                  @login="handleLogin"
                  @click="handleClick"
                  @sdk-init="handleSdkInit"
                  v-model="facebook.model"
                  :app-id="facebook.appId"
                  :useAltLogo="facebook.useAltLogo"
                  class="docs-v-facebook-login mx-auto"
                  logo-class="docs-v-facebook-login-logo"
                  loader-class="docs-v-facebook-login-loader"
                  :class="{ 'is-connected': connected, 'is-inverted': inverted }"
                >
                </VFacebookLogin>
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
import { get } from 'lodash'
import VFacebookLogin from 'vue-facebook-login-component'

export default {
  name: "Login",
  components: {
    GoogleLogin,
    VFacebookLogin,
  },
  data(){
    return {
      email: "",
      password: "",
      params: {
        client_id: "337335887389-af6plqi8r6h0lgjdrgthijrvrck10kgn.apps.googleusercontent.com"
      },
      facebook: {
        FB: {},
        model: {},
        scope: {},
        appId: "976814339607748",
        useAltLogo: true,
      },
      user: {},
      inverted: false,
      }
  },

  computed: {
    idle() {
      return this.facebook.model.idle
    },
    connected() {
      return this.facebook.model.connected
    },
    disconnected() {
      return !this.connected
    },
    avatarUrl() {
      return get(this.user, 'picture.data.url')
    },
  },

  methods: {
    check(){
      
    },
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
          this.$swal.fire({
            title: 'Good!',
            text: `${res.data.message}`,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.email = ""
          this.password = ""
          this.show()
          this.$router.push("/")
        })
        .catch(err => {
          this.$swal.fire({
            title: 'Oops...',
            text: `${err.response.data.message}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        })
    },

    onSuccess(googleUser){
      let access_token = googleUser.getAuthResponse().id_token
      this.$store.dispatch("loginGoogle", access_token)
      .then(res => {
        localStorage.access_token = res.data.access_token;
        this.$swal.fire({
            title: 'Good!',
            text: `${res.data.message}`,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        this.$router.push('/')
        this.show()
      })
      .catch(err => {
        this.$swal.fire({
            title: 'Oops...',
            text: `${err.response.data.message}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
      })
    },

    // loginWithFacebook () {
    //   console.log(initFbsdk);
    //   // window.FB.login(response => {
    //   //   console.log('fb response', response)
    //   // }, this.params)
    // },

    // mounted: ()=>{
    //   initFbsdk()
    // },

    getUserData() {
     this.facebook.FB.login(
        '/me',
        { fields: 'id, name, picture' },
        user => (this.user = user)
      )
    },
    toggleAltLogo() {
      this.facebook.useAltLogo = !this.facebook.useAltLogo
    },
    handleSdkInit({ FB, scope }) {
      this.facebook.scope = scope
      this.facebook.FB = FB
    },
    handleLogin() {
      this.facebook.FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          var accessToken = response.authResponse.accessToken;
          this.$store.dispatch("handleLoginFb", accessToken)
            .then(()=> {
              console.log("masuk");
            })
        } 
      } );
    },
    handleClick() {
      
    },
    toggleInvert() {
      this.inverted = !this.inverted
    },
  }
}
</script>

<style>

</style>