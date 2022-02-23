<template>
  <section id="myprofileform" class="myprofileform">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3 align-self-center mb-3">
          <h2 class="text-center fw-bold subtitle">Edit Your Profile</h2>
        </div>
        <!-- Form -->
        <profile-form v-bind:pageName="pageName"></profile-form>
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
      pageName: "EditForm",
    };
  },
};
</script>

<style></style>
