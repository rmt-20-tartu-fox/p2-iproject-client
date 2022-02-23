<template>
  <div class="content-meme">
    <div class="addForm">
      <h1>Add Post</h1>
      <div class="addFormCard">
        <form
          action=""
          enctype="multipart/form-data"
          v-on:submit.prevent="addMeme"
        >
          <div class="formInput">
            <div class="input">
              <label for="">Title</label><br />
              <input type="text" v-model="title" />
            </div>
            <div class="input">
              <label for="">Image</label><br />
              <input type="file" v-on:change="previewFiles" />
            </div>
            <div class="input">
              <label for="">NSFW</label><br />
              <select v-model="nsfw">
                <option value="" hidden>--Select--</option>
                <option :value="true">Yes</option>
                <option :value="false">No</option>
              </select>
            </div>
            <div class="inputCategory">
              <label for="">Category</label><br />
              <select v-model="CategoryId">
                <option value="" hidden>--Select--</option>
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddMeme",
  data() {
    return {
      title: "",
      image: "",
      nsfw: "",
      CategoryId: "",
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    addMeme() {
      let fd = new FormData();
      fd.append("image", this.image, this.image.name);
      fd.append("title", this.title);
      fd.append("CategoryId", this.CategoryId);
      fd.append("nsfw", this.nsfw);

      console.log(fd, "<<<<<<<<< fd fd");

      this.$store.dispatch("addMeme", fd);
    },
    previewFiles(event) {
      console.log(event.target.files[0]);
      this.image = event.target.files[0];
    },
  },
};
</script>

<style></style>
