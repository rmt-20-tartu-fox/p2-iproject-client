<template>
  <header class="flex flex-row items-end justify-between">
    <div class="flex flex-col">
      <h1 class="text-3xl font-semibold leading-loose text-white">
        SMD-Movies
      </h1>
      <div class="text-gray-200">{{ date }}</div>
    </div>
    <div class="flex flex-row gap-4 py-4">
      <button
        v-if="!isLogin"
        @click.prevent="logInButton"
        type="button"
        class="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide bg-cyan-600 hover:bg-orange-600 hover:text-black transition duration-200"
      >
        Login
      </button>
      <button
        v-if="isLogin"
        @click.prevent="logOutButton"
        type="button"
        class="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide bg-cyan-600 hover:bg-orange-600 hover:text-black transition duration-200"
      >
        Logout
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      date: new Date().toLocaleDateString(),
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    logInButton() {
      this.$router.push({
        name: "Login",
      });
    },
    logOutButton() {
      localStorage.clear();
      this.$store.commit("SET_IS_LOGIN", false);
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style></style>
