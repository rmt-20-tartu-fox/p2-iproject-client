<template>
  <div>
    <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">NICE RECIPES</h1>
          <p class="lead fw-normal text-white-50 mb-0">Cook and Eat</p>
        </div>
      </div>
    </header>
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        >
          <wishlist-card-component
            v-for="recipe in wishlists"
            :key="recipe.id"
            :recipe="recipe"
          ></wishlist-card-component>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import wishlistCardComponent from "../components/wishlistCardComponent.vue";
export default {
  name: "wishListView",
  components: { wishlistCardComponent },
  computed: {
    wishlists() {
      return this.$store.state.wishlists;
    },
  },

  created() {
    this.$store.dispatch("fetchWishList");
  },
};
</script>

<style></style>
