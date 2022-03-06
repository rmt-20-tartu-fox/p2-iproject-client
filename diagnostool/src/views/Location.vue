<template>
  <section id="location">
    <section id="maps">
      <h2 class="mt-4 mb-2 fs-3">
        To view nearby hospitals, please enter your current location
      </h2>
      <Spinner v-if="isLoading"></Spinner>
      <div class="card mb-4 form-search">
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
    </section>
    <nearby id="nearby-result"></nearby>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import api from "../apis/server";
import Spinner from "vue-simple-spinner";
import Nearby from "../views/NearbyPlace.vue";
export default {
  name: "Location",
  components: {
    Spinner,
    Nearby,
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
#location {
  display: flex;
  flex-grow: 1;
}
#maps {
  display: flex;
  flex-direction: column;
  background-color: #dff6ff;
}

#maps > h2 {
  text-align: center !important;
}

.form-search {
  width: 560px;
}

@media only screen and (max-width: 576px) {
  #location {
    display: block;
  }

  #maps {
    background-color: white;
    padding: 12px;
  }

  .form-search {
    width: 360px !important;
  }
}

@media only screen and (max-width: 992px) {
  #location {
    display: block;
  }

  #maps {
    background-color: white;
    padding: 12px;
  }

  .form-search {
    width: 480px;
  }
}
</style>
