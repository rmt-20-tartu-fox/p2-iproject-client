<template>
  <div class="home">
    <Navbar page="home" />
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
      .then(resp => {
        console.log(resp.data, "token payment")
        window.snap.pay(resp.data.paymentToken);
      })
      .catch(err => console.log(err, "error payment"))
      // .then(resp => {
      //   // For example trigger on button clicked, or any time you need
      //   var payButton = document.getElementById('pay-button');
      //   payButton.addEventListener('click', function () {
      //     // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
      //     window.Veritrans.pay('TRANSACTION_TOKEN_HERE');
      //     // customer will be redirected after completing payment pop-up
      //   });
      // })
      // .catch(err => console.log(err.response.data))
    }
  }
};
</script>
