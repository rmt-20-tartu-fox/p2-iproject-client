<template>
  <div>
    <div v-for="item in products" :key="item.id">
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
        </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
              <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Jonathan Reinink</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: "CartPage",
  data() {
    return {
      products: this.$route.params.products,
      cart: this.$route.params.cart
    }
  },
  methods: {
    pay() {
      window.snap.pay(this.$store.state.transaction_token, {
        onSuccess: function(){
          /* You may add your own implementation here */
          Swal.fire({
            icon: 'success',
            title: 'Payment',
            text: 'Payment successful',
          })
        },
        onPending: function(){
          /* You may add your own implementation here */
          Swal.fire({
            icon: 'warning',
            title: 'Payment',
            text: 'Payment Pending',
          })
        },
        onError: function(){
          /* You may add your own implementation here */
          Swal.fire({
            icon: 'error',
            title: 'Payment',
            text: 'Payment Failed',
          })
        },
        onClose: function(){
          /* You may add your own implementation here */
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
        }
      });
    }
  }
}
</script>

<style>

</style>