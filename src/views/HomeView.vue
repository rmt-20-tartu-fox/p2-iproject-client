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
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item-dropdown text="Meal Type" right>
            <b-dropdown-item
              v-for="mealType in mealTypes"
              :key="mealType"
              href="#"
              @click.prevent="setMealType(mealType)"
              >{{ mealType }}</b-dropdown-item
            >
          </b-nav-item-dropdown> -->
          <!-- <b-nav-item-dropdown text="Category" right>
              <b-dropdown-item
                @click.prevent="setCategory(category.name)"
                v-for="category in categories"
                :key="category.id"
                href="#"
                >{{ category.name }}</b-dropdown-item
              >
            </b-nav-item-dropdown> -->
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
          <!-- <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="button"
              @click.prevent="setCleatFilter"
              >Clear Filter</b-button
            > -->
        </b-navbar-nav>
      </b-navbar>
    </header>
    <br />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
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
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import cardComponent from "../components/CardComponent.vue";
// import NavBarComponent from "../components/NavBarComponent.vue";
export default {
  data() {
    return {
      recipeName: "",
      mealType: "",
    };
  },
  name: "HomeView",
  // components: {
  //   HelloWorld,
  // },
  components: {
    cardComponent,
    // NavBarComponent,
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
