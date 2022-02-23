<template>
  <div class="text-left">
  <b-card
    :title="product.name"
    :img-src="product.imageUrl"
    img-alt="Image"
    img-top
    tag="article"
    style="width: 15rem;"
    class="mb-2"
  >
    <b-card-text style="font-weight: bold; font-size: 20px; color: green;" v-text="product.price"></b-card-text>
    <b-card-text style="font-weight: bold; font-size: 15px;">Available: {{ product.stock }}</b-card-text>
    <b-button class="mx-1" variant="success" @click="addCart(product.id)">Add Cart</b-button>
    <b-button variant="dark" @click="renderDetailPage(product.id)">See Detail</b-button>
  </b-card>
</div>
</template>

<script>
import swal from "sweetalert2"
export default {
  name: "Card",
  props: [ "product" ],
  methods: {
    renderDetailPage(id) {
      this.$router.push({
        name: "Detail",
        params: {
          id
        }
      })
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