<template>
  <div class="home">
    <Navbar />
    <Products :products="products"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "@/components/Products.vue";
import Navbar from "../components/Navbar.vue"
export default {
  name: "Home",
  components: {
    Products,
    Navbar
  },
  created() {
    this.fetchProducts()
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch("fetchProducts")
    }
  }
};
</script>
