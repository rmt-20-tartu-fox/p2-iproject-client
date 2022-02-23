<template>
  <section id="nearby-result">
    <h1 class="mb-2">
      Based on your location, this is list of hospitals nearby your location
    </h1>
    <b-card
      class="mb-2 p-1"
      v-for="near in nearby"
      v-bind:key="near.place_id"
      :per-page="perPage"
      :current-page="currentPage"
      id="my-card"
      ><hospital :near="near"></hospital>
    </b-card>
    <div class="overflow-auto">
      <b-pagination
        id="page"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-card"
        align="center"
      ></b-pagination>
    </div>
  </section>
</template>

<script>
import Hospital from "../components/Hospital.vue";
export default {
  name: "Nearby",
  components: {
    Hospital,
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
    };
  },
  computed: {
    nearby() {
      let items = this.$store.state.nearby;
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    rows() {
      return this.$store.state.nearby.length;
    },
  },
};
</script>

<style>
#nearby-result {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
