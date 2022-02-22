<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

     <div class="w-full h-screen">
    <gmap-map
      :zoom="16"
      :center="center"
      :options="options"
      style="width: 100%; height: 100%"
    >
      <gmap-marker
        v-for="(loc, index) in locationMarkers"
        :key="index"
        :position="loc.position"
        :clickable="true"
        :draggable="false"
        @click="center = loc.position"
      ></gmap-marker>
    </gmap-map>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
