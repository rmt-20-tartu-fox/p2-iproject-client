<template>
  <div v-if="useMask == true" class="home">
    <div class="grid grid-cols-3">
      <div class="px-4 py-4 col-span-2">
        <h1 class="text-6xl font-semi-bold">Welcome,</h1>
        <h1 class="mt-4 text-2xl text-slate-400">Click on menu images to add it into cart,</h1>
      </div>
      <div class="flex justify-end mx-4 my-auto text-right">
        <p class="px-1 py-1 rounded-full bg-black text-white">{{totalItem}}</p><button @click.prevent="checkOut()"><i class="fa-solid fa-cart-shopping fa-2xl"></i></button>
      </div>
    </div>
    <CardComp v-bind:products="products" v-bind:cart="cart"></CardComp>
    <video @playing="startDetect" id="videoEl" width="800" height="600" autoplay muted></video>
  </div>
</template>

<script>
// @ is an alias to /src
import * as faceapi from "face-api.js";
import CardComp from '../components/Card.vue'

export default {
  name: 'MainPage',
  components: {
    CardComp
  },
  data() {
    return {
      videoEl: null,
      useMask: true,
      payButton: null
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    categories() {
      return this.$store.state.categories
    },
    cart() {
      return this.$store.state.cart
    },
    totalItem() {
      const data = this.$store.state.arrayProducts
      if(data.length == 0) {
        return 0
      } else {
        let total = 0
        data.forEach(e => {
          total += e.qty
        });
        return total
      }
    }
  },
  created() {
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('getBackground')
  },
  mounted() {
    this.videoEl = document.getElementById('videoEl')
    this.payButton = document.getElementById('pay-button')
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
          .withFaceDescriptor()
          if(detection) {
            console.log(detection.detection.score);
            if(detection.detection.score > 0.8) {
              this.useMask = false
            } else {
              this.useMask = true
            }
          } else {
            this.useMask = true
          }
      }, 3000);
    },
    checkOut() {
      this.$store.dispatch('checkOut')
    },
    createCart() {
      this.$store.dispatch('getTransactionToken')
    },
    clearCart() {
      this.$store.dispatch('clearCart')
    }
  }
}
</script>
