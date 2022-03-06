<template>
  <section id="diagnose">
    <h1 id="diagnose-header" class="mt-4 mb-2">
      Please enter your information below, to determine your disease
    </h1>
    <Spinner v-if="isLoading"></Spinner>
    <div class="card mb-3">
      <form @submit.prevent="getDiagnose">
        <div class="row">
          <div class="mb-3 col">
            <label class="form-label">Gender</label>
            <select
              v-model="gender"
              class="form-select"
              aria-label="Default select example"
              required
            >
              <option selected disabled>Select gender...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="mb-3 col">
            <label class="form-label">Date of Birth</label>
            <input required v-model="date" type="date" class="form-control" />
          </div>
        </div>

        <div class="mb-3">
          <label class="typo__label">Select symptoms (searchable)</label>
          <multiselect
            v-model="value"
            :options="options"
            :custom-label="symptomsName"
            :multiple="true"
            placeholder="Select one"
            label="name"
            track-by="ID"
          ></multiselect>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";
// import symptoms from "../data/dummySymptoms";
import symptoms from "../data/symptoms";
import api from "../apis/server";
import Swal from "sweetalert2";
import Spinner from "vue-simple-spinner";
export default {
  name: "Diagnose",
  components: {
    Multiselect,
    Spinner,
  },
  data() {
    return {
      value: null,
      options: symptoms,
      date: "",
      gender: "",
      isLoading: false,
    };
  },
  computed: {
    year() {
      return new Date(this.date).getFullYear();
    },
    symptomsId() {
      let id = [];
      this.value.forEach((el) => {
        id.push(el.ID);
      });
      return id;
    },
  },
  methods: {
    symptomsName({ Name }) {
      return Name;
    },
    getDiagnose() {
      this.isLoading = true;
      if (!this.value) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please select a symptom",
        });
        this.isLoading = false;
      }
      api
        .post(
          "/diagnosis",
          {
            gender: this.gender,
            symptoms: this.symptomsId,
            yearOfBirth: this.year,
          },
          {}
        )
        .then((resp) => {
          this.$store.commit("setDiagnoseResult", resp.data);
          this.$router.push({ name: "Result" }).catch(() => {
            console.log("done");
          });

          if (resp.data.length == 0) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "There is no disease based on your symptoms input, please try again",
            });
          }
          this.value = null;
          this.gender = null;
          this.date = null;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.response.data);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
          this.isLoading = false;
        });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
<style>
#diagnose {
  display: flex !important;
  flex-direction: column;
  flex-grow: 1 !important;
  margin-top: 10px !important;
}

#diagnose label {
  text-align: left !important;
}

#diagnose-header {
  text-align: center;
}

#result h1 {
  text-align: center;
}

@media only screen and (max-width: 576px) {
  #diagnose h1 {
    font-size: 1.6rem !important;
  }
  #diagnose .card {
    width: 360px;
  }
}

@media only screen and (max-width: 992px) {
  #diagnose {
    margin-top: 32px;
  }
}
</style>
