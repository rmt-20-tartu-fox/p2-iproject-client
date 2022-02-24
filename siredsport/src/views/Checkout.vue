<template>
  <div>
    <Navbar />
    <div v-if="page !== 'select'" class="container mt-3">
      <b-card style="margin-left: 300px; margin-right: 300px">
        <div>
          <h5 style="font-weight: bold;">Name: {{ preview.payload.name }}</h5>
          <h5 style="font-weight: bold; color: green;" v-text="preview.payload.total"></h5>

          <em>Ongkir: Rp. 9000,00</em>
          <br> <br>
          <button style="width: 100%;" class="btn btn-success">Pay</button>
          <button style="width: 100%;" class="btn btn-danger mt-2">Cancel</button>
        </div>
      </b-card>
    </div>
    <div v-if="page === 'select'" class="container mt-3">
      <b-card style="margin-left: 300px; margin-right: 300px">
        <div>
          <div>
            <label for="province">Province:</label>
            <b-form-select v-model="province" :options="allProvinces" size="sm" class="mt-3"></b-form-select>
            <label class="mt-4" for="city">City:</label>
            <b-form-select v-model="city" :options="allCities" size="sm" class="mt-3"></b-form-select>
          </div>
          <br> <br>
          <button class="btn btn-warning" @click="nextStep">Next</button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
  name: "Checkout",
  components: {
    Navbar
  },
  computed: {
    preview() {
      return this.$store.state.preview
    },
    allProvinces() {
      const temp = []
      this.$store.state.allProvinces.forEach(el => {
        temp.push({
          text: el.province,
          value: el.province_id
        })
      });
      return temp
    },
    allCities() {
      const temp = []
      this.$store.state.allCities.forEach(el => {
        temp.push({
          text: el.city_name,
          value: el.city_id
        })
      });
      return temp
    },
  },
  beforeUpdate() {
    this.fetchCity()
  },
  created() {
    this.fetchProvince()
  },
  methods: {
    nextStep() {
      this.page = "result ongkir"
      this.$store.dispatch("checkoutPreview", this.city)
    },
    fetchCity() {
      this.$store.dispatch("fetchCity", this.province)
    },
    fetchProvince() {
      this.$store.dispatch("fetchProvince")
    }
  },
  data() {
    return {
      page: "select",
      city: null,
      province: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  }
}
</script>

<style>

</style>