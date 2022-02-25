<template>
  <section id="myprofileform" class="myprofileform">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 align-self-center mb-3">
          <h2 class="text-center fw-bold subtitle">Complete Your Profile</h2>
        </div>
        <!-- Form -->
        <profile-form v-on:submitHandler="createProfile" v-bind:pageName="pageName" v-bind:data="data"></profile-form>
        <!-- Form -->
      </div>
    </div>
  </section>
</template>

<script>
import ProfileForm from "../components/ProfileForm.vue";
export default {
  name: "ProfileFormEdit",
  components: {
    ProfileForm,
  },
  data: function () {
    return {
      pageName: "CreateForm",
      data: {
        name: "",
        education: "",
        job: "",
        description: "",
        sex: "",
      },
    };
  },
  methods: {
    createProfile: async function (value) {
      // console.log(value);
      await this.$store.dispatch("createProfile", value);
      if (this.completed) {
        this.$router.push({ name: "Login" });
      }
    },
  },
  computed: {
    completed: function () {
      return this.$store.state.isRegistered;
    },
  },
};
</script>

<style></style>
