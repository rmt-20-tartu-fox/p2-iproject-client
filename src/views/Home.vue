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
                <form>
                  <div class="form-group pt-2">
                    <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Max Age" min="18" />
                  </div>
                  <div class="form-group pt-2">
                    <input type="number" class="form-control" placeholder="Max Distance" min="5" />
                  </div>
                  <div class="form-group pt-2">
                    <select class="form-control">
                      <option>Sex</option>
                    </select>
                  </div>
                  <button type="submit" class="btn btn-primary mt-2">Filter</button>
                </form>
              </div>
              <!-- Profile -->
              <profile></profile>
              <!-- Profile -->
            </div>
            <!-- Card -->
            <profile-card></profile-card>
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
  components: {
    ProfileCard,
    Profile,
  },
};
</script>
