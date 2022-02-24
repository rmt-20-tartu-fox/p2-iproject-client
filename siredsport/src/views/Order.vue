<template>
  <div>
    <Navbar />
    <b-card class="d-flex justify-content-center">
      <h3>Order</h3>
      <b-table striped hover :items="order"></b-table>
    </b-card>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
  name: "Order",
  components: {
    Navbar
  },
  computed: {
    order() {
      let temp = []
      this.$store.state.order.forEach(el => {
        temp.push({ Name: el.name, Total: el.total, Date: el.createdAt})
      });
      return temp
    }
  },
  created() {
    this.fetchHistories()
  },
  methods: {
    fetchHistories() {
      this.$store.dispatch("fetchHistories")
    }
  },
  data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
} 
</script>

<style>

</style>