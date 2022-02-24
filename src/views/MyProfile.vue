<template>
  <section id="home" class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3 align-self-center">
          <h2 class="text-center fw-bold subtitle">Profile and Matches</h2>
        </div>
        <div class="row justify-content-evenly p-3 mx-5">
          <div class="col-lg-3">
            <!-- Profile -->
            <profile v-bind:user="userData"></profile>
            <!-- Profile -->
          </div>
          <!-- Card -->
          <div class="d-flex col-lg-7 pt-4 ps-lg-2 pt-lg-0 justify-content-center">
            <div class="card h-50">
              <img src="https://2.bp.blogspot.com/-JGq6A3evzp0/Vt-DFzQptRI/AAAAAAAABbg/CYQa935YxtA/s1600/anggun-c-sasmi1.jpg" class="card-img-top" alt="Palangkaraya 2015 Fire" />
              <a href="" class="btn btn-warning btn-sm stretched-link">Chat</a>
            </div>
          </div>
          <!-- Card -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Profile from "../components/Profile.vue";
export default {
  name: "MyProfile",
  components: {
    Profile,
  },
  methods: {
    getUserData: function () {
      this.$store.dispatch("viewMyProfile");
    },
    getMatches: function () {
      this.$store.dispatch("viewMatches");
    },
  },
  computed: {
    userData: function () {
      return this.$store.state.userData;
    },
    matches: function () {
      return this.$store.state.matches;
    },
  },
  created() {
    this.getUserData();
    this.getMatches();
  },
};
</script>

<style scope>
.card {
  max-width: 15rem;
}
</style>
