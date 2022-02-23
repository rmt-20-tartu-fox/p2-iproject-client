<template>
  <div class="home">
    <div v-if="useMask == true" class="flex">
      <div v-for="product in products" :key="product.id" class="max-w-sm rounded mx-4 mt-4 overflow-hidden shadow-lg">
        <img class="w-full" src="https://d1sag4ddilekf6.azureedge.net/compressed/items/6-CYLWVCBKAA33C2-CYLWVCBKGE6WGN/photo/menueditor_item_c21ac25fa7534072a2bb98dd967cb1fb_1584856720011716077.jpg" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{product.name}}</div>
          <div class="font-bold text-xl mb-2">{{product.price}}</div>
        </div>
      </div>
    </div>
    <video style="visibility: hidden" @playing="startDetect" id="videoEl" width="800" height="600" autoplay muted></video>
  </div>
</template>

<script>
// @ is an alias to /src
import * as faceapi from "face-api.js";

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      videoEl: null,
      useMask: true,
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  created() {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('getBackground')
  },
  mounted() {
    this.videoEl = document.getElementById('videoEl')
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ])
    .then(this.startCamera(this.videoEl));
  },
  methods: {
    async startCamera(video){
        navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream){
            video.srcObject = stream;
        })
        .catch(function(err){
            console.log(err);
        })
    },
    startDetect(){
      setInterval(async () => {
          const detection = await faceapi.detectSingleFace(
              this.videoEl,
              new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceDescriptor()
          console.log(detection);
          if(detection) {
            if(detection.detection.score > 0.7) {
              this.useMask = false
            } else {
              this.useMask = true
            }
          } else {
            this.useMask = true
          }
      }, 2000);
    }
  }
}
</script>
