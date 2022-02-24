<template>
  <div
      class="container d-flex flex-row p-0 mb-3"
      style="height: 400px; border-color: gray"
      
    >
      <div style="flex: 0.6; position: relative">
        <img
          :src="hotel.max_photo_url"
          alt=""
          style="
            object-fit: cover;
            object-position: 50% 40%;
            height: 400px;
            width: 100%;
            border-radius: 10px;
          "
        />
        
      </div>
      <div style="flex: 0.4; flex-direction: column" class="d-flex">
        <div class="d-flex">
          <div style="flex-grow: 1" class="text-left pl-5 m-auto">
            <h4 class="pt-3">{{ hotel.hotel_name }}</h4>
            <hr />
            <div class="d-flex">
              <h6>Address:</h6>
              <div class="ml-2">
                {{ hotel.address }}
              </div>
              <p>{{ hotel.district }}</p>
            </div>
            <p class="m-0">Checkin from: {{ hotel.checkin.from }}</p>
            <p>Checkout until: {{ hotel.checkout.until }}</p>
            <div>
              <s> </s>
              <h6 style="color: red">
                <s>
                  IDR
                  {{
                    hotel.composite_price_breakdown.all_inclusive_amount.value
                  }}
                </s>
              </h6>
              <h5>
                IDR
                {{
                  hotel.composite_price_breakdown.gross_amount_per_night.value
                }}
              </h5>
              <p>Hotel Bintang: {{ hotel.class }}</p>
            </div>
            <div class="container text-center">
              <button class="btn btn-primary" @click.prevent="seeDetail"> See Detail </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "HotelCard",
  props: ['hotel', 'i'],
  methods: {
    seeDetail() {
      sessionStorage.setItem('hotel_id', this.hotel.hotel_id)
      this.$store.dispatch('getRoom').then(resp => {
        this.$store.commit('SET_ROOMHOTEL', resp.data[0])
        this.$router.push('/room')
      }).catch(err => console.log(err.response.message))
    }
  }
}
</script>

<style>

</style>