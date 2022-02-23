<template>
  <div
    class="abc"
    :class="hola ? 'windy' : 'sunny'"
    style="background-color: black; width: 100vw; height: 100vh"
  >
    <NavigationBar />
    <!-- <HFooter /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "../components/NavigationBar.vue";

// import HFooter from "vue-hacktiv8-footer";

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
    // HFooter,
  },
  methods: {},
  computed: {
    weatherData() {
      return this.$store.state.weatherData?.current?.clouds > 50;
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

.windy {
  background-image: url("../assets/onRaining.jfif");
}

.sunny {
  background-image: url("../assets/backgroundImage3.jpg");
}
</style>
