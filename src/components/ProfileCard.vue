<template>
  <div class="d-flex col-lg-7 pt-4 ps-lg-2 pt-lg-0 justify-content-center">
    <div class="card h-100">
      <img :src="thisUser.Profile.photos" class="card-img-top" />
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div>
            <h5 class="card-title">{{ thisUser.Profile.name }}, {{ thisUser.age }}</h5>
            <p class="card-text">{{ thisDistance }} km away</p>
          </div>
          <div>
            <p class="border border-danger rounded-circle p-2 text-center text-danger">{{ thisPercentage }}%</p>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-around">
        <a @click.prevent="nextPage('pass')" href="" class="btn btn-warning">Pass</a>
        <a @click.prevent="nextPage('like')" href="" class="btn btn-warning">Like</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: ["user", "distance", "percentage"],
  computed: {
    thisUser: function () {
      return this.user;
    },
    thisDistance: function () {
      return this.distance.distance;
    },
    thisPercentage: function () {
      return this.percentage;
    },
  },
  methods: {
    nextPage: function (val) {
      this.$emit("nextPage", { id: this.thisUser.id, resp: val });
    },
  },
};
</script>

<style></style>
