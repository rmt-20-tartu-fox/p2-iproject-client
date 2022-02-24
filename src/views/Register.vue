<template>
  <div class="register">
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
          class="relative w-full rounded-3xl px-8 bg-cyan-600 shadow-md py-14"
        >
          <label
            for=""
            class="block mt-3 text-3xl font-bold text-gray-800 text-center"
          >
            Register
          </label>
          <form @submit.prevent="submitRegistHandler" class="mt-10">
            <div>
              <input
                v-model="dataRegist.name"
                type="text"
                placeholder="   Your Name"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div class="mt-7">
              <input
                v-model="dataRegist.email"
                type="email"
                placeholder="   Your Email"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div class="mt-7">
              <input
                v-model="dataRegist.password"
                type="password"
                placeholder="   Your Password"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div class="mt-7">
              <button
                type="submit"
                class="bg-orange-600 w-full py-3 rounded-xl font-semibold text-gray-800 shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >
                Register
              </button>
            </div>
          </form>
          <div class="mt-7 flex">
            <div class="w-full text-center">
              <p class="mb-0 font-normal text-gray-800">
                Have an account?
                <a
                  @click.prevent="toLogin"
                  href="#!"
                  class="hover:text-black cursor-pointer text-gray-800 font-semibold"
                  >Sign In here</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      dataRegist: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    toLogin() {
      this.$router.push({ name: "Login" });
    },
    async submitRegistHandler() {
      await this.$store.dispatch("registerHandler", this.dataRegist);
      this.$router.push({ name: "Login" });
    },
  },
  computed: {},
};
</script>

<style></style>
