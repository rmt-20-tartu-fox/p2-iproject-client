<template>
  <div class="min-w-screen min-h-screen bg-gray-100 flex">
    <div class="w-1/4 min-h-screen bg-white"></div>
    <div class="w-3/4 min-h-screen flex items-center justify-center">
      <form
        action=""
        class="bg-white w-1/2 px-5 py-10 flex flex-col block items-center justify-center rounded"
        @submit.prevent="register"
      >
        <h2 class="text-lg mb-4">Sign Up</h2>

        <!-- <label for="" class="mb-4">Name</label>
        <input
          type="text"
          v-model="user.name"
          placeholder="Full name"
          class="mb-4 w-3/4 rounded border-gray-400 border p-1"
        /> -->

        <label for="" class="mb-4">Email</label>
        <input
          type="email"
          v-model="user.email"
          placeholder="Email"
          class="mb-4 w-3/4 rounded border-gray-400 border p-1"
        />

        <label for="" class="mb-4">Password</label>
        <input
          type="password"
          v-model="user.password"
          placeholder="Password"
          class="mb-4 w-3/4 rounded border-gray-400 border p-1"
        />

        <input
          type="submit"
          value="Submit"
          class="bg-blue-400 w-3/4 rounded p-2 mt-5 mb-5"
        />
        <!-- <router-link to="/login" class="mb-2">Sign in</router-link> -->
        <!-- <a href="" class="mb-2" >Sign in</a>
        <a href="" class="mt-2">Back to home</a> -->
        <!-- <router-link to="/" class="mt-2">Back to home</router-link> -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: `Register`,
  data() {
    return {
      user: {
        email: "",
        password: "",
        name: "",
      },
    };
  },
  methods: {
    async register() {
      await this.$store.dispatch("register", this.user);
      if (this.$store.state.page == "Login") {
        this.$router.push({ name: "Login" });
      }
    },
  },
  created() {
    this.$store.commit("SET_IS_LOGIN_PAGE", true);
  },
};
</script>

<style></style>
