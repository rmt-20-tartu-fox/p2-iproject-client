<template>
  <div style="padding: 50px;">
    <Navbar />
    <div class="row d-flex justify-content-center mt-5 mx-2">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 740px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="product.imageUrl"></b-card-img>
              </b-col>
              <b-col md="6" class="text-left mt-3">
                <b-card-body :title="product.name">
                  <b-card-text v-text="product.description">
                  </b-card-text>
                  <b-button class="mx-1" variant="success" @click="addCart(product.id)">Add Cart</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import swal from "sweetalert2"
export default {
  name: "Detail",
  components: {
    Navbar
  },
  computed: {
    product() {
      return this.$store.state.productById
    }
  },
  created() {
    this.productById()
  },
  methods: {
    productById() {
      this.$store.dispatch("fetchProductById", this.$route.params.id)
    },
    addCart(id) {
      this.$store.dispatch("addCart", id)
      .then(resp => {
        const Toast = swal.mixin({
          toast: true,
          position: "top-center",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "New Product add to your cart",
        });
      })
      .catch(err => {
        swal.fire({
          icon: "error",
          title: err.response.data.message
        })
      })
    }
  }
}
</script>

<style>

</style>