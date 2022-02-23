<template>
  <div>
    <div id="map">
      <div id="detail">
        <h3>Hospital Detail</h3>
        <h6>Name: {{ near.properties.name }}</h6>
        <h6>City: {{ near.properties.city }}</h6>
        <h6>Address: {{ near.properties.address_line2 }}</h6>
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="400"
            height="250"
            id="gmap_canvas"
            :src="url"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe
          ><a href="https://123movies-to.org"></a><br /><a
            href="https://www.embedgooglemap.net"
            >google maps iframe code</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hospital",
  props: ["near"],
  computed: {
    url() {
      let fixAddress = this.near.properties.address_line2.replace(" ", "%20");
      return `https://maps.google.com/maps?q=${fixAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    },
  },
};
</script>

<style>
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 250px !important;
  width: 400px !important;
}
.mapouter {
  text-align: left;
  height: 250px !important;
  width: 400px !important;
}

#map {
  display: flex;
  justify-content: space-between;
}
</style>
