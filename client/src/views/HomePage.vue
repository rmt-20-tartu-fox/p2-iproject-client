<template>
  <div
    class="abc"
    :class="weatherData ? 'rainy' : 'sunny'"
    style="background-color: black; width: 100vw; height: 100vh"
  >
    <NavigationBar />
    <HFooter style="position: fixed; bottom: 0; width: 100%; height: 50px" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "../components/SideAndNavigationBar.vue";
import HFooter from "vue-hacktiv8-footer";

export default {
  name: "HomePage",
  data() {
    return {
      image: "",
      hola: true,
    };
  },
  components: {
    NavigationBar,
    HFooter,
  },
  methods: {},
  computed: {
    weatherData() {
      return this.$store.state.weatherData?.current?.humidity > 80;
    },
  },
  async created() {
    const data = await this.$store.dispatch("checkPet");
    this.$store.commit("PETS_DATA_FILLER", data);
    await this.$store.dispatch("getWeather");
    // only when needed
  },
};
</script>

<style>
.abc {
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.sunny {
  background-image: url("../assets/sunny2.jpg");
}

.rainy {
  background-image: url("../assets/rainy.jpg");
}
</style>
