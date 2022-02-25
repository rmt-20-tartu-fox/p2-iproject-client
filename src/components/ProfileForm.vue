<template>
  <div class="row justify-content-evenly p-3 mx-5">
    <div class="col col-md-5 bg-white p-4 rounded-xl">
      <form @submit.prevent="submitHandler" class="justify-content-center" enctype="multipart/form-data">
        <div class="form-group mt-2">
          <input v-model="data.nama" type="text" class="form-control" placeholder="Name" />
        </div>
        <div class="form-group mt-3">
          <input v-model="data.education" type="text" class="form-control" placeholder="Education" />
        </div>
        <div class="form-group mt-3">
          <input v-model="data.job" type="text" class="form-control" placeholder="Occupation" />
        </div>
        <div class="form-group mt-3">
          <textarea v-model="data.description" class="form-control" rows="3" placeholder="Describe yourself here..."></textarea>
        </div>
        <div class="form-group mt-3">
          <select v-model="data.sex" class="form-control">
            <option selected disabled>Choose Your Sex</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div class="input-group mb-3 mt-3">
          <div class="custom-file">
            <input @change="receivePhoto" name="profilePhoto" type="file" class="custom-file-input" id="inputGroupFile01" />
            <label class="custom-file-label" for="inputGroupFile01">Choose photo</label>
          </div>
        </div>
        <div class="d-flex justify-content-center"><button type="submit" class="btn btn-primary mt-3">Submit</button></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileForm",
  data: function () {
    return {
      data: {
        photo: {},
        nama: "",
        education: "",
        job: "",
        description: "",
        sex: "Choose Your Sex",
      },
    };
  },
  props: ["pageName"],
  methods: {
    submitHandler: function () {
      this.$emit("submitHandler", this.data);
    },
    receivePhoto: function (event) {
      console.log("masuk");
      console.log(event.target.files[0]);
      // const file = event.target.files[];
      // let filename = files[0].name
      this.data.photo = event.target.files[0];
    },
  },
  computed: {
    thisPage: function () {
      return this.pageName;
    },
  },
  created() {
    this.dataProfile = this.data;
  },
};
</script>

<style></style>
