<template>
  <div>
    <button @click.prevent="pay()" >Pay</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: "CartPage",
  data() {
    return {
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
            confirmButtonText: 'Yes, delete it!'
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