<template>
  <div
      class="container d-flex flex-row p-0 mb-3"
      style="height: 500px; border-color: gray"
      
    >
      <div style="flex: 0.6; position: relative">
        <img
          src=""
          alt=""
          style="
            object-fit: cover;
            object-position: 50% 40%;
            height: 500px;
            width: 100%;
            border-radius: 10px;
          "
        />
      </div>
      <div style="flex: 0.4; flex-direction: column" class="d-flex">
        <div class="d-flex">
          <div style="flex-grow: 1" class="text-left pl-5 m-auto">
            <h4 class="pt-3">{{ hotel.room_name }}</h4>
            <hr />
            <div class="d-flex">
              <h6>Policies:</h6>
              <div class="ml-2">
                <p v-for="(policy, i) in hotel.block_text.policies"
                :key="policy + i" class="m-0">{{i + 1}}. {{ policy.content }} </p>
              </div>
            </div>
            <p class="m-0" v-text="hotel.mealplan"
            ></p>
            <div class="container text-center mt-2">
              <button class="btn btn-primary" @click.prevent="addBookMark"> Add Bookmark </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "RoomCard",
  props: ['hotel', 'i', 'rooms', "hotel_id"],
  computed: {
  },
  methods: {
    addBookMark() {
      console.log({room_id: this.hotel.room_id, hotel_id: this.hotel_id, data: this.$store.state.roomHotel})
      this.$store.dispatch('addBookMark', {room_id: this.hotel.room_id, hotel_id: this.hotel_id, data: this.$store.state.roomHotel}).then(() => {
        this.$router.push('/bookmark')
      }).catch(err => console.log(err.response))
    }
  }
}
</script>

<style>

</style>