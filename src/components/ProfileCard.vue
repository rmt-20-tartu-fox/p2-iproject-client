<template>
  <div class="d-flex col-lg-7 pt-4 ps-lg-2 pt-lg-0 justify-content-center">
    <div class="card h-100">
      <img :src="thisUser.Profile.photos" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ thisUser.Profile.name }}, {{ thisUser.age }}</h5>
        <p class="card-text">{{ thisDistance }} km away</p>
      </div>
      <div class="card-footer d-flex justify-content-around">
        <a @click.prevent="nextPage('pass')" href="" class="btn btn-warning">Pass</a>
        <a href="" class="btn btn-warning">Detail</a>
        <a @click.prevent="nextPage('like')" href="" class="btn btn-warning">Like</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: ["user", "distance"],
  computed: {
    thisUser: function () {
      return this.user;
    },
    thisDistance: function () {
      return this.distance.distance;
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
