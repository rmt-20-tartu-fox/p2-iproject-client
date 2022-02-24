<template>
  <div>
    <div
      class="d-flex w-100 m-0 mb-3"
      style="height: 115px; background-color: azure; justify-content: center"
    >
      <div class="d-flex" style="flex-direction: row; justify-content: center">
        <div
          v-for="(weather, i) in dataWeather"
          :key="weather.id"
          class="container d-flex forp"
          style="flex-direction: column; width: max-content"
        >
          <p
            class="m-0"
            style="font-size: 14px; justify-content: center: center"
          >
            {{ weather.temp }} C
          </p>
          <img
            v-if="weather.weather.description == 'Sunny'"
            src="../assets/images/weather/sunny.png"
            alt=""
            class="pb-1 pt-2"
            style="height: 45px; object-fit: "
          />
          <img
            v-if="weather.weather.description == 'Clear Sky'"
            src="../assets/images/weather/sunny.png"
            alt=""
            class="pb-1 pt-2"
            style="height: 45px; object-fit: "
          />
          <img
            v-if="weather.weather.description == 'Few clouds'"
            src="../assets/images/weather/few-cloud.png"
            alt=""
            class="pb-1 pt-2"
            style="height: 45px; object-fit: "
          />
          <img
            v-if="weather.weather.description == 'Scattered clouds'"
            src="../assets/images/weather/partially-cloudy-day.png"
            alt=""
            class="pb-1 pt-2"
            style="height: 45px; object-fit: "
          />
          <img
            v-if="weather.weather.description == 'Overcast clouds'"
            src="../assets/images/weather/overcast.png"
            alt=""
            class="pb-1 pt-2"
            style="height: 45px; object-fit: "
          />
          <img
            v-if="weather.weather.description == 'Thunderstorm with rain'"
            src="../assets/images/weather/stormy.png"
            alt=""
            class="pb-1 pt-2"
            style="height: 45px; object-fit: "
          />
          <img
            v-if="weather.weather.description == 'Raining'"
            src="../assets/images/weather/rain.png"
            alt=""
            class="pb-1 pt-2"
            style="height: 45px; object-fit: "
          />
          <img
            v-if="weather.weather.description == 'Drizzle'"
            src="../assets/images/weather/drizzle.png"
            alt=""
            class="pb-1 pt-2"
            style="height: 45px; object-fit: "
          />
          <img
            v-if="weather.weather.description == 'Broken clouds'"
            src="../assets/images/weather/cloudy.png"
            alt=""
            class="pb-1 pt-2"
            style="height: 45px; object-fit: "
          />
          <p class="m-0" style="font-size: 14px">{{ (i + 1) * 12 }} Hr</p>
        </div>
      </div>
    </div>

    <!-- card -->
    <hotel-card
      v-for="(hotel, i) in dataHotel"
      :key="i"
      :hotel="hotel"
      :i="i"
    ></hotel-card>
  </div>
</template>

<script>
import HotelCard from "../components/HotelCard.vue";
export default {
  name: "HotelByCity",
  components: {
    HotelCard,
  },
  created() {
    this.$store.dispatch("setCurrentUser", this.username);
  },
  computed: {
    dataWeather() {
      return this.$store.state.weatherAtCity;
    },
    dataHotel() {
      return this.$store.state.hotelAtCity;
    },
  },
};
</script>

<style>
.forp {
  display: flex;
  align-self: center;
}
</style>