<template>
  <div class="min-w-screen min-h-screen bg-gray-100 flex">
    <div class="w-1/4 min-h-screen bg-white"></div>
    <div class="w-3/4 min-h-screen flex items-center justify-center">
      <form
        action=""
        class="bg-white w-1/2 px-5 py-10 flex flex-col block items-center justify-center rounded"
        @submit.prevent="login"
      >
        <h2 class="text-lg mb-4">Sign In</h2>

        <label for="" class="mb-4">Email</label>
        <input
          type="email"
          v-model="user.email"
          class="mb-4 w-3/4 rounded border-gray-400 border p-1"
        />

        <label for="" class="mb-4">Password</label>
        <input
          type="password"
          v-model="user.password"
          class="mb-4 w-3/4 rounded border-gray-400 border p-1"
        />
        <input
          type="submit"
          value="Submit"
          class="bg-blue-400 w-3/4 rounded p-2 mt-5 mb-5"
        />
        <GoogleLogin
          :params="params"
          :renderParams="renderParams"
          :onSuccess="onSuccess"
          :onFailure="onFailure"
        ></GoogleLogin>
        <!-- <router-link to="/register" class="mb-2">Sign up</router-link>
        <router-link to="/" class="mt-2">Back to home</router-link> -->
      </form>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: `Login`,
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      params: {
        client_id:
          "168102640418-dno5l95cu5h7gvqi2indvtn8fvf6acs6.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    async login() {
      await this.$store.dispatch("login", this.user);
      if (this.isLogin) {
        this.$router.push({ name: `Home` });
      }
    },
    async onSuccess(googleUser) {
      await this.$store.dispatch("onSuccess", googleUser);
      if (this.isLogin) {
        this.$router.push({ name: "Home" });
      }
    },
    onFailure() {
      console.log("<<<<<<");
    },
  },
  created() {
    this.$store.commit("SET_IS_LOGIN_PAGE", true);
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style></style>
