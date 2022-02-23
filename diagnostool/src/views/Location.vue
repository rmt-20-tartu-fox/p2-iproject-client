<template>
  <section id="maps">
    <h1 class="mt-4 mb-2">
      To view nearby hospitals, please enter your current location
    </h1>
    <Spinner v-if="isLoading"></Spinner>
    <div class="card mb-4">
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
import Spinner from "vue-simple-spinner";
export default {
  name: "Location",
  components: {
    Spinner,
  },
  data: function () {
    return {
      location: "",
      radius: 0,
      isLoading: false,
    };
  },
  methods: {
    getNearby() {
      this.isLoading = true;
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
            this.isLoading = false;
          } else {
            if (resp.data.features.length == 0) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There is no hospitals within the current radius, please enter another value",
              });
              this.isLoading = false;
            } else {
              this.$store.commit("setNearby", resp.data.features);
              this.$router.push({ name: "Nearby" }).catch(() => {
                console.log("done");
              });
              this.isLoading = false;
            }
          }
        })
        .catch((err) => {
          console.log(err.response.data);
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
#maps {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
#maps h1 {
  text-align: center;
}
</style>
