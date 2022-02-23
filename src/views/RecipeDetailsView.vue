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
    <div>
      <div class="card">
        <div class="d-flex flex-row" style="align-self: center">
          <div class="product-img" style="position: relativ">
            <div
              class="product-price-btn"
              style="position: absolute; margin-top: 30px"
            >
              <button type="button">add to Wish list</button>
            </div>
            <img
              v-bind:src="recipeDetails.recipe.image"
              height="420"
              width="327"
            />
          </div>
          <div class="product-info">
            <div class="product-text">
              <h1>{{ recipeDetails.recipe.label }}</h1>
              <hr />
              <p
                v-for="(ingredient, index) in recipeDetails.recipe
                  .ingredientLines"
                :key="index"
              >
                {{ ingredient }}
              </p>
            </div>
            <!-- <div>
              <p>
                <span>{{ recipeDetails.recipe.mealType[0] }}</span>
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeDetailsView",
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

<style>
.wrapper {
  height: 420px;
  width: 654px;
  margin: 50px auto;
  border-radius: 7px 7px 7px 7px;
  /* VIA CSS MATIC https://goo.gl/cIbnS */
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
}

.product-img {
  object-fit: cover;
  object-position: 50% 50%;
  height: 420px;
  width: 327px;
}

.product-img img {
  border-radius: 7px 0 0 7px;
}

.product-info {
  float: left;
  height: 420px;
  width: 327px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
}

.product-text {
  height: 300px;
  width: 327px;
}

.product-text h1 {
  margin: 0 0 0 3px;
  padding-top: 10px;
  font-size: 34px;
  color: #474747;
}

.product-text h1,
.product-price-btn p {
  font-family: "Bentham", serif;
}

.product-text h2 {
  margin: 0 0 47px 38px;
  font-size: 13px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.2em;
}

.product-text p {
  height: max-content;
  margin: 0 0 0 20px;
  font-family: "Playfair Display", serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
}

.product-price-btn {
  height: 103px;
  width: 327px;
  margin-top: -10px;
  position: relative;
}

.product-price-btn p {
  display: inline-block;
  position: absolute;
  top: -13px;
  height: 50px;
  font-family: "Trocchi", serif;
  margin: 0 0 0 38px;
  font-size: 28px;
  font-weight: lighter;
  color: #474747;
}

span {
  display: inline-block;
  height: 50px;
  font-family: "Suranna", serif;
  font-size: 34px;
}

.product-price-btn button {
  top: -20%;
  bottom: -20%;
  display: inline-block;
  height: 50px;
  width: 176px;
  margin: 0 10px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
  margin-right: 5px;
}

.product-price-btn button:hover {
  background-color: #79b0a1;
}
</style>
