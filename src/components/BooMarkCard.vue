<template>
  <div
    class="container d-flex flex-row p-0 mb-3"
    style="height: 400px; border-color: gray"
  >
    <div style="flex: 0.6; position: relative">
      <img
        :src="bookmark[1].photos[0].url_original"
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
          <h4 class="pt-3">{{ bookmark[0].room_name }}</h4>
          <hr />
          <div class="d-flex">
            <h6>Mealplan:</h6>
            <div class="ml-2">
              {{ bookmark[0].mealplan }}
            </div>
          </div>
          <p class="m-0">LK: {{ bookmark[0].room_surface_in_m2 }} m2</p>
          
          <div>
            <s>
              <h5 style="color: red">
                IDR
                {{ bookmark[0].product_price_breakdown.strikethrough_amount.value }}
              </h5>
            </s>

            <h5>
              IDR
              {{ bookmark[0].min_price.price }}
            </h5>
            
          </div>
          <div class="container text-center">
            <button class="btn btn-primary" @click.prevent="removeBookmark">
              Remove BookMark
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelCard",
  props: ["bookmark", "i"],
  methods: {
    seeDetail() {
      sessionStorage.setItem("hotel_id", this.hotel.hotel_id);
      this.$store
        .dispatch("getRoom")
        .then((resp) => {
          this.$store.commit("SET_ROOMHOTEL", resp.data[0]);
          this.$router.push("/room");
        })
        .catch((err) => console.log(err.response.message));
    },
    removeBookmark() {
      this.$store.dispatch('removeBookMark', this.bookmark[2]).then(() => {
        this.$store.dispatch('getMyBookMark', {
        headers: {
          access_token: localStorage.access_token
        }
      }).then(resp => {
        this.$store.commit('SET_MYBOOKMARK', resp.data)
      }).catch(err => console.log(err.response.message))
      })
    }
  },
};
</script>

<style>
</style>