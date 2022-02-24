<template>
  <nav class="flex justify-between">
    <div>
      <img
        class="w-30 h-20"
        src="https://i.pinimg.com/originals/95/f8/58/95f8588d6469a16271ea2d2fad419d00.png"
        alt=""
      />
    </div>
    <div class="flex items-center">
      <ul>
        <li class="inline ml-10" @click.prevent="homePage">Home</li>
        <li class="inline ml-10" v-if="isLogin" @click.prevent="myBookPage">
          My Book
        </li>
      </ul>
    </div>
    <div class="flex items-center">
      <ul>
        <li class="inline ml-8" @click.prevent="loginPage" v-if="!isLogin">
          Sign in
        </li>
        <li
          class="inline ml-8 mr-5"
          @click.prevent="registerPage"
          v-if="!isLogin"
        >
          Sign up
        </li>
        <li
          class="inline ml-8 mr-5 cursor-point"
          @click.prevent="logout"
          :params="params"
          :logoutButton="true"
          v-if="isLogin"
        >
          Logout
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: `Navbar`,
  data() {
    return {
      params: {
        client_id:
          "168102640418-dno5l95cu5h7gvqi2indvtn8fvf6acs6.apps.googleusercontent.com",
      },
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit("SET_IS_LOGIN", false);
      if (this.$route.name !== "Home") {
        this.$router.push({ name: `Home` });
      }
    },
    registerPage() {
      this.$router.push({ name: `Register` });
    },
    loginPage() {
      this.$router.push({ name: `Login` });
    },
    homePage() {
      this.$router.push({ name: `Home` });
      this.$store.commit("SET_PAGE", "Home");
    },
    myBookPage() {
      this.$router.push({ name: `MyBook` });
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style></style>
