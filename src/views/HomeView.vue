<template>
  <div class="home">
    <!-- <NavBarComponent /> -->
    <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">NICE RECIPES</h1>
          <p class="lead fw-normal text-white-50 mb-0">Cook and Eat</p>
        </div>
      </div>
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="fetchRecipes">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Breakfast/Lunch/Dinner"
              v-model="mealType"
            ></b-form-input>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="recipeName"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>
    </header>
    <br />
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        >
          <card-component
            v-for="recipe in recipes"
            :key="recipe.recipe.uri"
            :recipe="recipe"
          ></card-component>
        </div>
      </div>
    </section>
    <HFooter style="position: fixed; bottom: 0; width: 100%" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import cardComponent from "../components/CardComponent.vue";
import HFooter from "vue-hacktiv8-footer";
// import NavBarComponent from "../components/NavBarComponent.vue";
export default {
  data() {
    return {
      recipeName: "",
      mealType: "",
    };
  },
  name: "HomeView",
  components: {
    cardComponent,
    HFooter,
  },

  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
  methods: {
    fetchRecipes() {
      const data = {
        recipeName: this.recipeName,
        mealType: this.mealType,
      };
      this.$store.dispatch("fetchRecipes", data);
    },
  },
};
</script>

<style></style>
