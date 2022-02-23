<template>
  <div>
    <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">NICE RECIPES</h1>
          <p class="lead fw-normal text-white-50 mb-0">Cook and Eat</p>
        </div>
      </div>
    </header>
    <div class="image">
      <div class="container-fluid" style="margin-top: 5%">
        <div class="row main-content bg-success text-center">
          <div class="col-md-4 text-center company__info">
            <span class="company__logo"
              ><h2><span class="fa fa-android"></span></h2
            ></span>
            <h4
              class="company_title"
              style="color: black; font-family: 'Oswald', sans-serif"
            ></h4>
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12 login_form">
            <div class="container-fluid">
              <div class="col" style="margin-top: 5%; color: black">
                <h2>Wanna Know Your BMI??? Let's Find Out Together</h2>
              </div>
              <div class="col">
                <form control="" class="form-group" @submit.prevent="getBMI">
                  <div class="row">
                    <input
                      type="number"
                      name="weight"
                      id="weight"
                      class="form__input"
                      placeholder="Weight in Kg"
                      v-model="weight"
                    />
                  </div>
                  <div class="row">
                    <!-- <span class="fa fa-lock"></span> -->
                    <input
                      type="number"
                      name="height"
                      id="number"
                      class="form__input"
                      placeholder="Height in Cm"
                      v-model="height"
                      style="aligment: center"
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary rounded submit px-3"
                    >
                      Calculate
                    </button>
                  </div>
                </form>
                <hr />
                <div class="row">
                  <!-- <span class="fa fa-lock"></span> -->
                  <h3>{{ Math.ceil(bmi) }}</h3>
                </div>
              </div>
              <div class="col">
                <p>How's Your BMI Doing???</p>
                <br />
              </div>
              <div>
                <button
                  class="form-control btn btn-primary rounded submit px-3"
                  style="margin-bottom: 5%"
                  @click.prevent="clearBMI"
                >
                  Clear BMI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HFooter style="position: fixed; bottom: 0; width: 100%" />
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  components: { HFooter },
  data() {
    return {
      height: "",
      weight: "",
    };
  },

  computed: {
    bmi() {
      return this.$store.state.bmi;
    },
  },
  // created() {
  //   // this.$store.dispatch("getBMI");
  // },
  methods: {
    getBMI() {
      const data = {
        height: this.height / 100,
        weight: this.weight,
      };
      console.log(data);
      this.$store.dispatch("getBMI", data);
    },
    clearBMI() {
      this.$store.commit("clearBMI");
      this.height = "";
      this.weight = "";
    },
  },
};
</script>

<style></style>
