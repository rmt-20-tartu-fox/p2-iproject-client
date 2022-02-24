<template>
  <section id="nearby-result">
    <h2 class="mt-4 mb-2">
      Based on your location, this is list of hospitals nearby your location
    </h2>
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
        v-if="nearby.length != 0"
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
  text-align: center !important;
}

#nearby-result > h2 {
  text-align: center !important;
  padding: 4px;
}

#my-card {
  margin: 12px auto;
  width: 700px;
}
</style>
