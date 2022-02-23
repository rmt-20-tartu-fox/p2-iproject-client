<template>
  <div class="login">
    <div
      class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-800"
    >
      <div class="relative sm:max-w-sm w-full">
        <div
          class="card bg-cyan-900 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
        ></div>
        <div
          class="card bg-cyan-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
        ></div>
        <div
          class="relative w-full rounded-3xl px-6 py-4 bg-cyan-600 shadow-md"
        >
          <label
            for=""
            class="block mt-3 text-3xl font-bold text-gray-800 text-center"
          >
            Login
          </label>
          <form @submit.prevent="submitLoginHandler" class="mt-10">
            <div>
              <input
                v-model="dataLogin.email"
                type="email"
                placeholder="   Your email here"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div class="mt-7">
              <input
                v-model="dataLogin.password"
                type="password"
                placeholder="   Your password here"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div class="mt-7 flex">
              <div class="w-full text-center">
                <p class="mb-0 font-normal text-gray-800">
                  Don't have an account?
                  <a
                    @click.prevent="toRegister"
                    href="#!"
                    class="hover:text-black cursor-pointer text-gray-800 font-semibold"
                    >Sign Up here</a
                  >
                </p>
              </div>
            </div>

            <div class="mt-7">
              <button
                type="submit"
                class="bg-orange-600 w-full py-3 rounded-xl text-gray-800 font-semibold shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >
                Login
              </button>
            </div>

            <div class="flex mt-7 items-center text-center">
              <hr class="border-gray-300 border-1 w-full rounded-md" />
              <label class="block font-medium text-sm text-gray-900 w-full">
                Alternative
              </label>
              <hr class="border-gray-300 border-1 w-full rounded-md" />
            </div>

            <div class="flex mt-7 justify-center w-full"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    toRegister() {
      this.$router.push({ name: "Register" });
    },
    async submitLoginHandler() {
      await this.$store.dispatch("loginHandler", this.dataLogin);

      if (this.isLogin) {
        this.$router.push({ name: "Home" });
      }
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
