<template>
  <div>
    <NavigationBar />
    <div>
      <form @submit.prevent="submit" enctype="multipart/form-data">
        <input @change="upload" type="file" name="image" />
        <input type="submit" />
      </form>

      <div class="badge">neutral</div>
      <progress class="progress w-56" value="70" max="100"></progress>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "../components/NavigationBar.vue";

export default {
  name: "HomeView",
  data() {
    return {
      image: "",
    };
  },
  components: {
    NavigationBar,
  },
  methods: {
    upload(file) {
      this.image = file.target.files[0];
    },
    async submit() {
      const formData = new FormData();
      formData.append("file", this.image);
      const labelsData = await this.$store.dispatch("upload", formData);
      console.log(labelsData);
      await this.$store.dispatch("feedPet", labelsData);
      console.log(`BERHASILLLLLLL`);
    },
  },
  created() {},
};
</script>

<style></style>
