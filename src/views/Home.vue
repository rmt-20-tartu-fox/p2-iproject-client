<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <section id="home" class="home">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-3 align-self-center">
            <h2 class="text-center fw-bold subtitle">Home</h2>
          </div>
          <div class="row justify-content-evenly p-3 mx-5">
            <div class="col-lg-3">
              <div class="bg-white p-3 rounded-lg">
                <form @click.prevent="fetchUsers">
                  <div class="form-group pt-2">
                    <input v-model="maxAge" type="Number" class="form-control" placeholder="Max Age" min="18" />
                  </div>
                  <div class="form-group pt-2">
                    <input v-model="maxDist" type="number" class="form-control" placeholder="Max Distance" min="5" />
                  </div>
                  <div class="form-group pt-2">
                    <select v-model="sexInput" class="form-control">
                      <option value="male" selected disabled>filter sex</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </select>
                  </div>
                  <button type="submit" class="btn btn-primary mt-2">Filter</button>
                </form>
              </div>
              <!-- Profile -->
              <profile v-bind:user="user"></profile>
              <!-- Profile -->
            </div>
            <!-- Card -->
            <profile-card v-bind:user="user" v-bind:distance="distance" v-on:nextPage="nextPage"></profile-card>
            <!-- Card -->
          </div>
        </div>
      </div>
    </section>
    <!-- Section -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ProfileCard from "../components/ProfileCard.vue";
import Profile from "../components/Profile.vue";

export default {
  name: "Home",
  data: function () {
    return {
      sexInput: "",
      maxAge: null,
      maxDist: null,
    };
  },
  components: {
    ProfileCard,
    Profile,
  },
  methods: {
    fetchUsers: function () {
      this.$store.dispatch("fetchAllUsers", {
        sex: this.sexInput,
        maxAge: this.maxAge,
        maxDist: this.maxDist,
      });
    },
    response: function (params) {
      this.$store.dispatch("smashOrPass", params);
    },
    nextPage: async function (params) {
      const next = this.currentPage + 1;
      await this.$store.commit("SET_PAGE_NUMBERS", next);
      this.response(params);
      this.fetchUsers();
    },
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    user: function () {
      return this.$store.state.usersData.rows;
    },
    totalPages: function () {
      return this.$store.state.usersData.count;
    },
    distance: function () {
      return this.$store.state.usersData.dist;
    },
    currentPage: function () {
      return this.$store.state.currentPage;
    },
  },
};
</script>
