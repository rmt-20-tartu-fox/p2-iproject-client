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
          <!-- <a
            class="btn btn-outline-dark mt-auto"
            href="#"
            @click.prevent="toRecipeDetails(recipe.recipe.uri)"
            >Add wihsList</a
          > -->
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="container">
    <div class="container d-flex flex-row">
      <div class="d-flex flex-row">
        <div
          class="food-card col-sm-6 col-md-6 col-lg-4"
          style="margin-left: 5%"
        >
          <div class="food-card_img">
            <img src="https://i.imgur.com/eFWRUuR.jpg" alt="" />
            <a href="#!"><i class="far fa-heart"></i></a>
          </div>
          <div class="food-card_content">
            <div class="food-card_title-section">
              <a href="#!" class="food-card_title"
                >Double Cheese Potato Burger</a
              >
              <a href="#!" class="food-card_author">Burger</a>
            </div>
            <div class="food-card_bottom-section">
              <div class="space-between">
                <div><span class="fa fa-fire"></span> 220 - 280 Kcal</div>
                <div class="pull-right">
                  <span class="badge badge-success">Veg</span>
                </div>
              </div>
              <hr />
              <div class="space-between">
                <div class="food-card_price">
                  <span>5.99$</span>
                </div>
                <div class="food-card_order-count">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-secondary minus-btn"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control input-manulator"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      value="0"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-secondary add-btn"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="food-card col-sm-6 col-md-6 col-lg-4"
          style="margin-left: 5%"
        >
          <div class="food-card_img">
            <img src="https://i.imgur.com/eFWRUuR.jpg" alt="" />
            <a href="#!"><i class="far fa-heart"></i></a>
          </div>
          <div class="food-card_content">
            <div class="food-card_title-section">
              <a href="#!" class="food-card_title"
                >Double Cheese Potato Burger</a
              >
              <a href="#!" class="food-card_author">Burger</a>
            </div>
            <div class="food-card_bottom-section">
              <div class="space-between">
                <div><span class="fa fa-fire"></span> 220 - 280 Kcal</div>
                <div class="pull-right">
                  <span class="badge badge-success">Veg</span>
                </div>
              </div>
              <hr />
              <div class="space-between">
                <div class="food-card_price">
                  <span>5.99$</span>
                </div>
                <div class="food-card_order-count">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-secondary minus-btn"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control input-manulator"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      value="0"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-secondary add-btn"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
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
  },
};
</script>

<style></style>
