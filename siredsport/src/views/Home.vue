<template>
  <div class="home">
    <Navbar page="home" />
    <button @click="bayar">bayar</button>
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
    },
    bayar() {
      this.$store.dispatch("payment")
      .then(resp => console.log(resp))
      .catch(err => console.log(err.response.data))
    }
  }
};
</script>
