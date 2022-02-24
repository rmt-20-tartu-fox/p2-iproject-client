<template>
  <div class="mt-3">
    <h1 v-if="dataRoom.total_blocks == 0">Room has been SOLD OUT.</h1>
    <room-card v-for="(hotel, i) in dataRoom.block" :key="i" :hotel="hotel" :i="i" :rooms="dataRoom.rooms" :hotel_id="dataRoom.hotel_id"/>
  </div>
</template>

<script>
import RoomCard from "../components/RoomCard.vue";
export default {
  name: "DetailRoom",
  components: {
    RoomCard,
  },
  computed: {
    dataRoom() {
      return this.$store.state.roomHotel;
    },
  },
};
</script>

<style>
</style>