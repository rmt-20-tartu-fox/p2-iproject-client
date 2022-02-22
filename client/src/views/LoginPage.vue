<template>
  <div
    class="bg-no-repeat bg-cover bg-center relative"
    style="
      background-image: url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80);
    "
  >
    <div
      class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"
    ></div>
    <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div
        class="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10"
      >
        <div class="self-start hidden lg:flex flex-col text-white">
          <img src="" class="mb-3" />
          <h1 class="mb-3 font-bold text-5xl">Hi 👋 Welcome Back</h1>
          <p class="pr-3">Your pet wants you.</p>
        </div>
      </div>
      <div class="flex justify-center self-center z-10">
        <div class="p-12 bg-white mx-auto rounded-2xl w-100">
          <div class="mb-4">
            <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
            <p class="text-gray-500">Please sign in to your account.</p>
          </div>
          <div class="space-y-5">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide"
                >Email</label
              >
              <input
                v-model="payload.email"
                class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div class="space-y-2">
              <label
                class="mb-5 text-sm font-medium text-gray-700 tracking-wide"
              >
                Password
              </label>
              <input
                v-model="payload.password"
                class="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                @click="login"
                type="button"
                class="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </div>
          <div class="pt-5 text-center text-gray-400 text-xs">
            <span>
              Don't have account?
              <a
                @click.prevent="navigate"
                href="#"
                rel=""
                target="_blank"
                title="Ajimon"
                class="text-green hover:text-green-500"
                >Register here</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      payload: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const payload = this.payload;
      const response = await this.$store.dispatch("login", payload);

      localStorage.access_token = response.data.access_token;
      localStorage.OwnerID = response.data.OwnerID;

      const { OwnerID } = response.data;

      const finding = await this.$store.dispatch("checkPet", { OwnerID });
      if (finding.data.status === 0) {
        this.$router.push("/birthpage");
      } else {
        this.$router.push("/");
      }
    },
    navigate() {
      this.$router.push("/register");
    },
  },
};
</script>

<style></style>
