<template>
  <div>
    <button class="w-full h-48 border flex flex-row hover:bg-blue-200">
      <div
        class="flex flex-wrap justify-center items-center h-full w-1/4 overflow-hidden"
      >
        <div class="w-full px-4">
          <img
            :src="location.imgUrl"
            class="h-full object-cover object-center"
          />
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div
          class="h-1/2 text-lg text-left px-8 pt-6"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
        >
          {{ location.name }}
        </div>
        <div
          class="text-md text-left mt-6 px-8"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 400"
        >
          {{ location.address }}
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RestaurantCard",
  props: ["location"],
  methods: {
    ...mapActions(["detailHandler"]),
    // goToDetail(locationId) {
    //   // router.push({
    //   //   name: "LocationDetail",
    //   //   params: { locationId: this.location.id },
    //   // });
    //   this.detailHandler(locationId);
    // }
  },
};
</script>

<style></style>
