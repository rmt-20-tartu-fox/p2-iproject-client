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
    <br />
    <!-- style="display: flex; flex-direction: row; justify-content: space-around" -->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-1 justify-content-center"
        >
          <details-component :recipeDetails="recipeDetails"></details-component>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import detailsComponent from "../components/detailsComponent.vue";
export default {
  components: { detailsComponent },
  name: "recipeDetails",
  computed: {
    recipeDetails() {
      return this.$store.state.recipeDetails;
    },
  },
  created() {
    this.$store.dispatch("fetchDetail", this.$route.params.id);
  },
};
</script>

<style></style>
