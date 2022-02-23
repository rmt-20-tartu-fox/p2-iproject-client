<template>
  <div>
    <gmap-map
      :zoom="16"
      :center="center"
      :options="options"
      style="width: 100%; height: 100vh"
    >
      <!-- <gmap-marker
      v-for="(loc, index) in locationMarkers"
      :key="index"
      :position="loc.position"
      :clickable="true"
      :draggable="false"
      @click="center = loc.position"
    ></gmap-marker> -->
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "Maps",
  data() {
    return {
      options: {
        fullscreenControl: false,
      },
      center: {
        lat: -7.759722999999999,
        lng: 110.3989719,
      },
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

<style></style>
