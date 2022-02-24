<template>
  <div>
    <div class="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          :src="`https://image.tmdb.org/t/p/300/${moviePopular.poster_path}`"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <div class="justify-end card-actions">
          <button class="btn btn-primary">See detail</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["moviePopular"],
};
</script>

<style></style>
