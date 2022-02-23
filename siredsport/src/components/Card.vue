<template>
  <div class="text-left">
  <b-card
    :title="product.name"
    :img-src="product.imageUrl"
    img-alt="Image"
    img-top
    tag="article"
    style="width: 10rem;"
    class="mb-5 mx-1"
  >
    <b-card-text style="font-weight: bold; font-size: 15px;" v-text="product.price"></b-card-text>
    <b-card-text style="font-weight: bold; font-size: 15px;">Available: {{ product.stock }}</b-card-text>
    <b-button href="#" class="mb-2" variant="success">Add Cart</b-button>
    <b-button href="#" variant="dark">See Detail</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: "Card",
  props: [ "product" ]
}
</script>

<style>

</style>