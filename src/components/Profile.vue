<template>
  <div class="bg-white p-3 rounded-lg mt-3">
    <h4>Profile</h4>
    <p v-text="thisUser.Profile.name"></p>
    <p v-text="thisUser.Profile.education"></p>
    <p v-text="thisUser.Profile.job"></p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: ["user"],
  computed: {
    thisUser: function () {
      return this.user;
    },
  },
};
</script>

<style></style>
