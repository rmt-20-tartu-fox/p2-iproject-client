<template>
  <div>
    <!-- Section-->
    <section class="py-1">
      <div class="container px-4 px-lg-5 mt-5">
        <!-- allproduct banner  -->
        <div class="py-1 mb-3" style="background-color: #636e72">
          <div class="container px-4 px-lg-5 my-1">
            <div class="text-center text-light">
              <h5 class="display-7 fw-bolder">My Favorite Manga</h5>
            </div>
          </div>
        </div>
        <!-- allproduct banner  -->

        <div
          class="
            row
            gx-4 gx-lg-2
            row-cols-2 row-cols-md-3 row-cols-xl-5
            justify-content-center
          "
        >
          <div class="col mb-5" v-for="manga in mangas" :key="manga.Manga.malId">
            <div class="card h-100">
              <div
                class="badge bg-warning text-black position-absolute"
                style="top: 0.5rem; right: 0.5rem"
              >
                manga
              </div>
              <!-- Product image-->
              <img
                class="card-img-top"
                style="object-fit: cover; height: 300px"
                :src="manga.Manga.imageUrl  "
                alt="..."
              />
              <!-- Product details-->
              <div class="card-body">
                <div class="text-left">
                  <p class="fw-bolder m-0">{{manga.Manga.title }}</p>
                  <hr class="m-1" />
                  <p class="m-0">Chapters: <strong style="color:green">{{manga.Manga.chapters }}</strong></p>
                  <p class="m-0">Volume: {{ manga.volumes  }}</p>
                  <p class="m-0">Rating: <strong style="color:red">{{manga.Manga.rating  }}</strong></p>
                  <p class="m-0">Rank: {{ manga.Manga.rank  }}</p>
                  <p class="m-0">Popularity: {{ manga.Manga.popularity  }}</p>
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-2 border-top-0 bg-secondary">
                <div class="text-center m-1">
                  <a
                    @click.prevent="deleteFavorite(manga.id)"
                    class="btn btn-sm btn-danger mt-auto"
                    href="#"
                    >Delete from favorite</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Section-->
    <section class="py-1">
      <div class="container px-4 px-lg-5 mt-5">
        <!-- allproduct banner  -->
        <div class="py-1 mb-3" style="background-color: #636e72">
          <div class="container px-4 px-lg-5 my-1">
            <div class="text-center text-light">
              <h5 class="display-7 fw-bolder">My Favorite Anime</h5>
            </div>
          </div>
        </div>
        <!-- allproduct banner  -->
        <div
          class="
            row
            gx-4 gx-lg-2
            row-cols-2 row-cols-md-3 row-cols-xl-5
            justify-content-center
          "
        >
          <div class="col mb-5" v-for="anime in animes" :key="anime.Anime.malId">
            <div class="card h-100">
              <div
                class="badge bg-warning text-black position-absolute"
                style="top: 0.5rem; right: 0.5rem"
              >
                anime
              </div>
              <!-- Product image-->
              <img
                class="card-img-top"
                style="object-fit: cover; height: 300px"
                :src="anime.Anime.imageUrl"
                alt="..."
              />
              <!-- Product details-->
              <div class="card-body">
                <div class="text-left">
                  <p class="fw-bolder m-0">{{ anime.Anime.title }}</p>
                  <hr class="m-1" />
                  <p class="m-0">Episodes: <strong style="color:green">{{ anime.Anime.episodes }}</strong></p>
                  <p class="m-0">Duration: {{ anime.Anime.duration }}</p>
                  <p class="m-0">Rating: <strong style="color:red">{{ anime.Anime.rating }}</strong></p>
                  <p class="m-0">Rank: {{ anime.Anime.rank }}</p>
                  <p class="m-0">Popularity: {{ anime.Anime.popularity }}</p>
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-2 border-top-0 bg-secondary">
                <div class="text-center m-1">
                  <a
                    @click.prevent="deleteFavorite(anime.id)"
                    class="btn btn-sm btn-danger mt-auto"
                    href="#"
                    >Delete from favorite</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer-->
    <footer class="py-5 bg-danger">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; HactiveNime 2022
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MyFavorite',
  computed: {
    mangas() {
      return this.$store.state.favoriteMangas;
    },
    animes() {
      return this.$store.state.favoriteAnimes;
    },
  },
  created() {
    this.$store.dispatch("getFavoriteManga");
    this.$store.dispatch("getFavoriteAnime");
  },
  methods: {
    deleteFavorite(id) {
      console.log(id);
      this.$store.dispatch("deleteMyFavorite", id);
    }
  }
}
</script>

<style>

</style>
