<template>
  <div class="col-2 mt-2 d-flex justify-content-around">
    <div class="card" style="width: 13rem">
      <img class="card-img-top" :src="card.CardImageUrl" alt="Card image cap" />
      <div class="card-body">
        <button type="button" class="button btn-danger">Remove</button>
      </div>
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
