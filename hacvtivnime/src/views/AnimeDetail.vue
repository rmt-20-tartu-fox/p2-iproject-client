<template>
  <div>
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="
            row
            gx-4 gx-lg-2
            row-cols-2 row-cols-md-3 row-cols-xl-1
            justify-content-center
          "
        >
          <div class="col mb-5">
            <div class="card h-100">
              <!-- Product image-->
              <img
                class="card-img-top"
                style="object-fit: cover; height: 500px"
                :src="anime.images.jpg.large_image_url"
                alt="..."
              />
              <!-- Product details-->
              <div class="card-body">
                <div class="text-left">
                  <h4 class="fw-bolder m-0">Title: {{ anime.title }}</h4>
                  <hr class="m-1" />
                  <h5 class="m-0">Synopsis: </h5>
                  <p class="m-0">{{ anime.synopsis }}</p>
                  <hr />
                  <p class="m-0">
                    Episodes: <strong style="color:red">{{ anime.episodes }}</strong
                    >, Duration: <strong style="color:green">{{ anime.duration }}</strong>, Rating: <strong style="color:red">{{ anime.score }}</strong>,
                    Rank: <strong style="color:red">{{ anime.rank }}</strong>, Popularity: <strong style="color:red">{{ anime.popularity }}</strong>
                  </p>
                  <h4 class="m-0">Studios: {{ anime.studios[0].name }}</h4>
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-2 border-top-0 bg-secondary">
                <div class="text-center">
                  <a class="btn btn-sm btn-danger mt-auto" href="#"
                    >Add to Favorite</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AnimeDetail",
  computed: {
    anime() {
      return this.$store.state.anime;
    },
  },
  created() {
    this.$store.dispatch("getAnimeDetail", this.$route.params.id);
  },
};
</script>

<style>
</style>