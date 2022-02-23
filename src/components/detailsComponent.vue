<template>
  <div class="col mb-5">
    <div class="card h-100">
      <img class="card-img-top" :src="recipeDetails.recipe.image" alt="..." />

      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder">{{ recipeDetails.recipe.label }}</h5>
          Calories : {{ Math.ceil(recipeDetails.recipe.calories) }}
        </div>
        <hr />
        <h4>Ingredient</h4>
        <p
          v-for="ingredient in recipeDetails.recipe.ingredientLines"
          :key="ingredient"
        >
          {{ ingredient }}
        </p>
        <hr />
        <h4>Cuisine Type</h4>
        <p
          v-for="cuisineType in recipeDetails.recipe.cuisineType"
          :key="cuisineType"
        >
          {{ cuisineType }}
        </p>
        <hr />
        <h4>Meal Type</h4>
        <p v-for="mealType in recipeDetails.recipe.mealType" :key="mealType">
          {{ mealType }}
        </p>
      </div>
      <hr />
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a
            class="btn btn-outline-dark mt-auto"
            href="#"
            @click.prevent="addWishList(recipeDetails.recipe.uri)"
            >Add wihsList</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailCompnenet",
  props: ["recipeDetails"],

  methods: {
    addWishList(id) {
      let idBeforeSplit = id;
      const splitId = idBeforeSplit.split("#");
      this.$store.dispatch("addWishList", splitId[1]);
    },
  },
};
</script>

<style></style>
