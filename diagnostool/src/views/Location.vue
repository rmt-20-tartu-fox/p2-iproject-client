<template>
  <section id="maps">
    <h1>To view nearby hospitals, please enter your current location</h1>
    <div class="card">
      <form @submit.prevent="getNearby">
        <div class="mb-3">
          <label class="form-label">Current Location</label>
          <input v-model="location" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label"
            >Radius from current location (meters)</label
          >
          <input v-model="radius" type="number" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import api from "../apis/server";
export default {
  name: "Location",
  data: function () {
    return {
      location: "",
      radius: 0,
    };
  },
  methods: {
    getNearby() {
      api
        .post("/nearby", { location: this.location, radius: this.radius })
        .then((resp) => {
          if (resp.data.name == "Error") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: "Did you enter the location correctly?",
            });
          } else {
            if (resp.data.features.length == 0) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There is no hospitals within the current radius, please enter another value",
              });
            } else {
              this.$store.commit("setNearby", resp.data.features);
              this.$router.push({ name: "Nearby" }).catch(() => {
                console.log("done");
              });
            }
          }
        })
        .catch((err) => console.log(err.response.data));
    },
  },
};
</script>

<style>
#maps h1 {
  text-align: center;
}
</style>
