<template>
  <div class="home">
    <div class="grid grid-cols-5">
      <div>
        <img width="100" src="../assets/banner.png" alt="">
      </div>
      <div class="flex col-span-3">
        <label class="my-auto mx-4" for="search">Search:</label>
        <input class="w-full border-2 h-10 my-auto" type="text">
      </div>
      <div class=" mx-4 my-auto text-right">
        <button @click.prevent="checkOut()"><i class="fa-solid fa-cart-shopping fa-2xl"></i></button>
      </div>
    </div>

    <div class="flex px-10">
      <div v-for="product in products" :key="product.id" class="max-w-sm rounded mx-4 mt-4 overflow-hidden shadow-lg hover:shadow-indigo-500/40 hover:shadow-xl">
        <img @click="addToCart(product.id, product.price)" class="w-full" src="https://d1sag4ddilekf6.azureedge.net/compressed/items/6-CYLWVCBKAA33C2-CYLWVCBKGE6WGN/photo/menueditor_item_c21ac25fa7534072a2bb98dd967cb1fb_1584856720011716077.jpg" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{product.name}}</div>
          <div class="grid grid-cols-2">
            <div class="font-bold text-xl mb-2">{{product.price}}</div>
            <div v-if="cart.products[product.id]" class="font-bold text-xl mb-2">x {{cart.products[product.id].qty}}</div>
            <button v-if="cart.products[product.id]" @click.prevent="decreaseQty(product.id)"><i class="fa-solid fa-circle-minus"></i></button>
          </div>
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
  name: 'MainPage',
  components: {
  },
  data() {
    return {
      videoEl: null,
      useMask: true,
      payButton: null,
      cart: {
        UserId: 4,
        products: {},
        CustomerId: null,
        total: 0
      },
      arrayProducts: []
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
    this.$store.state.products.forEach(e => {
      this.selected[e.id] = {qty: 5}
    });
  },
  mounted() {
    // this.videoEl = document.getElementById('videoEl')
    // this.payButton = document.getElementById('pay-button')
    // Promise.all([
    //     faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    //     faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    //     faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    //     faceapi.nets.faceExpressionNet.loadFromUri('/models')
    // ])
    // .then(this.startCamera(this.videoEl));
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
    },
    addToCart(id, price) {
      if(this.cart.products[id]) {
        const quantity = this.cart.products[id].qty + 1
        this.cart.products[id] = {id, price, qty: quantity}
      } else {
        this.cart.products[id] = {id, price, qty: 1}
      }
      let convertProductToArray = Object.values(this.cart.products)
      this.arrayProducts = convertProductToArray
      this.$store.dispatch('fetchProducts')
      console.log(this.cart.products);
    },
    checkOut() {
      this.createCart()
      this.clearCart()
      this.$router.push({
        name: 'Cart',
        params: {products: this.arrayProducts, cart: this.cart}
      })
    },
    createCart() {
      this.$store.dispatch('getTransactionToken', this.cart)
    },
    clearCart() {
      this.cart.UserId = null
      this.cart.products = [],
      this.cart.CustomerId = null,
      this.cart.total = 0
    },
    decreaseQty(id) {
      if(this.cart.products[id].qty < 1) {
        this.cart.products[id] = null
      } else {
        this.cart.products[id].qty--
      }
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>
