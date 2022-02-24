<template>
  <div class="container">
    <div class="containet-forgot-password">
      <form @click.prevent="submitEmail">
        <div class="mg">
          <h3>INPUT YOUR EMAIL</h3>
        </div>
        <div class="mg">
          <input
            class="input"
            type="text"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="mg">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgetPassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    submitEmail() {
      this.$store.dispatch("resetEmail", { email: this.email });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.containet-forgot-password {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.input {
  width: 100%;
}
.mg {
  margin: 0px 0px 20px 0px;
}
</style>
