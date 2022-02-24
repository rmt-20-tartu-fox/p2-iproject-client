<template>
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Product image-->
      <img class="card-img-top" :src="recipe.recipe.image" alt="..." />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">{{ recipe.recipe.label }}</h5>
          <!-- Product price-->
          Calories : {{ Math.ceil(recipe.recipe.calories) }}
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a
            class="btn btn-outline-dark mt-auto"
            href="#"
            @click.prevent="toRecipeDetails(recipe.recipe.uri)"
            >Recipe Details</a
          >
          <hr />
          <a
            class="btn btn-outline-dark mt-auto"
            href="#"
            @click.prevent="addWishList(recipe.recipe.uri)"
            >Add wihsList</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardComponent",
  props: ["recipe"],

  methods: {
    toRecipeDetails(id) {
      let idBeforeSplit = id;
      const splitId = idBeforeSplit.split("#");
      console.log(splitId[1]);
      this.$router.push(`/details/${splitId[1]}`);
    },
    addWishList(id) {
      let idBeforeSplit = id;
      const splitId = idBeforeSplit.split("#");
      this.$store.dispatch("addWishList", splitId[1]);
    },
  },
};
</script>

<style></style>
