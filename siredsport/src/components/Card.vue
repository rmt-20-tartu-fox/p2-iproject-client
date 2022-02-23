<template>
  <div class="text-left">
  <b-card
    :title="product.name"
    :img-src="product.imageUrl"
    img-alt="Image"
    img-top
    tag="article"
    style="width: 15rem;"
    class="mb-5 mx-1"
  >
    <b-card-text style="font-weight: bold; font-size: 20px; color: green;" v-text="product.price"></b-card-text>
    <b-card-text style="font-weight: bold; font-size: 15px;">Available: {{ product.stock }}</b-card-text>
    <b-button class="mx-1" variant="success">Add Cart</b-button>
    <b-button variant="dark" @click="renderDetailPage(product.id)">See Detail</b-button>
  </b-card>
</div>
</template>

<script>
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
    }
  }
}
</script>

<style>

</style>