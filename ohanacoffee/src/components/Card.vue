<template>
    <div class="grid grid-cols-5 px-10">
      <div v-for="product in products" :key="product.id" class="max-w-sm rounded mx-4 mt-4 overflow-hidden shadow-lg hover:shadow-indigo-500/40 hover:shadow-xl">
        <img @click="addToCart(product)" class="w-full" src="https://d1sag4ddilekf6.azureedge.net/compressed/items/6-CYLWVCBKAA33C2-CYLWVCBKGE6WGN/photo/menueditor_item_c21ac25fa7534072a2bb98dd967cb1fb_1584856720011716077.jpg" alt="Sunset in the mountains">
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
</template>

<script>
export default {
  name: 'CardComp',
  props: ['products', 'cart'],
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    },
    decreaseQty(id) {
      this.$store.dispatch('decreaseQty', id)
    }
  }
}
</script>

<style>

</style>