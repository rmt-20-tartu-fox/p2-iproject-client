<template>
  <div class="col-3 mt-2 d-flex justify-content-around">
    <div class="card" style="width: 13rem">
      <img
        class="card-img-top"
        :src="card.card_images[0].image_url"
        alt="Card image cap"
      />
      <!-- <div class="card-body">
        <p class="card-text">
          {{ card.name }}
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardHome",
    props: ["card"],
  };
</script>

<style></style>
