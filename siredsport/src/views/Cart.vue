<template>
  <div>
    <Navbar />
    <div>
      <h1 style="font-weight: bold; color: white;">Your Cart</h1>
      <p v-if="carts.length" class="text-white">Select product yang ingin anda checkout! Enjoy</p>
      <div class="text-right fixed-bottom mx-5 my-5">
        <b-button-group class="text-right" v-if="carts.length">
          <b-button variant="danger" class="mx-1" @click="deleteAll">Delete All</b-button>
          <b-button variant="light" class="mx-1" @click="checkout">Checkout Here!</b-button>
        </b-button-group>
      </div>
      <em v-if="!carts.length" class="text-white mt-5">Not yet</em>
    </div>
    <div class="row d-flex justify-content-center mt-5 container-fluid">
      <b-card v-for="cart in carts" :key="cart.id" no-body class="overflow-hidden mt-2" style="max-height: 320px; max-width: 640px;">
        <b-row no-gutters class="d-flex justify-content-center">
          <b-col md="6">
            <b-card-img :src="cart.Product.imageUrl" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6" class="text-left">
            <div class="mx-2 mt-2">
              <h5 v-if="cart.isSelect" style="font-weight: bold;">SELECTED!</h5>
            </div>
            <b-card-body style="font-weight: bold;" :title="cart.Product.name">
              <b-card-text style="font-weight: bold; font-size: 20px; color: green;" v-text="cart.Product.price"></b-card-text>
              <b-card-text>
                <p>Quantity: {{ cart.quantity }}</p>
                  <div>
                    <b-button-group>
                      <b-button class="mx-1" @click="incrementQuantity(cart.id)">+</b-button>
                      <b-button @click="decrementQuantity(cart.id)">-</b-button>
                    </b-button-group>
                  </div>
                  <div class="my-2">
                    <b-button-group>
                      <b-button class="mx-1" @click="selectCart(cart.id)">Select</b-button>
                      <b-button class="mr-4" @click="unselectCart(cart.id)">Unselect</b-button>
                      <b-button @click="deleteById(cart.id)" variant="danger">Delete</b-button>
                    </b-button-group>
                  </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
        <b-row no-gutters class="d-flex justify-content-center">
          <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Horizontal Card">
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import swal from "sweetalert2"
export default {
  name: "Cart",
  computed: {
    carts() {
      return this.$store.state.carts
    }
  },
  components: {
    Navbar
  },
  created() {
    this.fetchCart()
  },
  methods: {
    incrementQuantity(id) {
      this.$store.dispatch("incrementQuantity", id)
      this.$store.state.carts.forEach(el => {
        if (el.id === +id) {
          el.quantity++
          return false
        }
      });
    },
    decrementQuantity(id) {
      this.$store.dispatch("decrementQuantity", id)
      this.$store.state.carts.forEach(el => {
        if (el.id === +id) {
          if (el.quantity !== 1) {
            el.quantity--
          }
          return false
        }
      });
    },
    deleteById(id) {
      this.$store.dispatch("deleteById", id)
    },
    deleteAll() {
      swal.fire({
        title: 'Do you want to delete all?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("deleteAll")
          swal.fire('Delete all successfully!', '', 'success')
        }
      })
    },
    fetchCart() {
      this.$store.dispatch("fetchCart")
      .catch(err => {
        if (err.response.data.message === "Token expired" || err.response.data.message === "Invalid Token") {
          this.$router.push({
            name: "Home"
          })
        }
        swal.fire({
          icon: 'error',
          title: err.response.data.message
        })
      })
    },
    selectCart(id) {
      this.$store.dispatch("selectCart", id)
    },
    unselectCart(id) {
      this.$store.dispatch("unselectCart", id)
    },
    checkout() {

    }
  }
}
</script>

<style>

</style>