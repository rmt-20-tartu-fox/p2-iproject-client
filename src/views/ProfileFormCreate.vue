<template>
  <section id="myprofileform" class="myprofileform">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 align-self-center mb-3">
          <h2 class="text-center fw-bold subtitle">Complete Your Profile</h2>
        </div>
        <!-- Form -->
        <profile-form></profile-form>
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
};
</script>

<style></style>
