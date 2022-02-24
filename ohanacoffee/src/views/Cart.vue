<template>
  <div v-bind:style="{ backgroundImage: 'url(' + background + ')' }" class="h-screen flex flex-col justify-center">
    <h1 class="mx-auto text-6xl text-white drop-shadow-2xl">Confirm Checkout</h1>
    <div class="mx-auto mt-5 px-30 py-30 w-4/5 rounded-xl bg-white border-solid shadow-2xl border-1">
      <table class="mt-10 mx-2 table-auto w-full">
        <tr class="bg-slate-400">
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Qty</th>
        </tr>
        <tr class="h-20 text-center" v-for="item in products" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td><button></button>{{item.qty}}</td>
        </tr>
      </table>
      <div class="flex flex-col text-right px-4 py-6">
        <button @click.prevent="pay()" class="bg-blue-800 px-2 py-4 rounded text-white">Proceed to Payment</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import router from '../router'
export default {
  name: "CartPage",
  data() {
    return {
      products: this.$route.params.products,
      cart: this.$route.params.cart
    }
  },
  computed: {
    background() {
      console.log(this.$store.state.background);
      return this.$store.state.background
    }
  },
  created() {
    this.$store.dispatch('getBackground')
  },
  methods: {
    pay() {
      window.snap.pay(this.$store.state.transaction_token, {
        onSuccess: function(){
          router.push({
            name: 'Main'
          })
          Swal.fire({
            icon: 'success',
            title: 'Payment',
            text: 'Payment successful',
          })
        },
        onPending: function(){
          router.push({
            name: 'Main'
          })
          Swal.fire({
            icon: 'warning',
            title: 'Payment',
            text: 'Payment Pending',
          })
        },
        onError: function(){
          Swal.fire({
            icon: 'error',
            title: 'Payment',
            text: 'Payment Failed',
          })
          router.push({
            name: 'Main'
          })
        },
        onClose: function(){
          Swal.fire({
            title: 'Payment',
            text: "Do you really want to cancel payment?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Payment',
                'Payment Canceled',
                'success'
              )
            }
          })
          router.push({
            name: 'Main'
          })
        }
      });
    }
  }
}
</script>

<style>

</style>