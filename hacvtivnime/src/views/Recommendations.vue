<template>
  <div>
    <!-- Section-->
    <section class="py-1">
      <div class="container px-4 px-lg-5 mt-5">
        <!-- allproduct banner  -->
        <div class="py-1 mb-3" style="background-color: #636e72">
          <div class="container px-4 px-lg-5 my-1">
            <div class="text-center text-light">
              <h5 class="display-7 fw-bolder">Top Rated Manga</h5>
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
          <div class="col mb-5" v-for="manga in mangas" :key="manga.mal_id">
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
                :src="manga.images.jpg.image_url"
                alt="..."
              />
              <!-- Product details-->
              <div class="card-body">
                <div class="text-left">
                  <p class="fw-bolder m-0">{{ manga.title }}</p>
                  <hr class="m-1" />
                  <p class="m-0">Chapters: <strong style="color:green">{{ manga.chapters }}</strong></p>
                  <p class="m-0">Volume: {{ manga.volumes }}</p>
                  <p class="m-0">Rating: <strong style="color:red">{{ manga.scored }}</strong></p>
                  <p class="m-0">Rank: {{ manga.rank }}</p>
                  <p class="m-0">Popularity: {{ manga.popularity }}</p>
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-2 border-top-0 bg-secondary">
                <div class="text-center m-1">
                  <a
                    @click.prevent="getMangaDetail(manga.mal_id)"
                    class="btn btn-sm btn-danger mt-auto"
                    href="#"
                    >Detail</a
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
              <h5 class="display-7 fw-bolder">Top Rated Anime</h5>
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
          <div class="col mb-5" v-for="anime in animes" :key="anime.mal_id">
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
                :src="anime.images.jpg.image_url"
                alt="..."
              />
              <!-- Product details-->
              <div class="card-body">
                <div class="text-left">
                  <p class="fw-bolder m-0">{{ anime.title }}</p>
                  <hr class="m-1" />
                  <p class="m-0">Episodes: <strong style="color:green">{{ anime.episodes }}</strong></p>
                  <p class="m-0">Duration: {{ anime.duration }}</p>
                  <p class="m-0">Rating: <strong style="color:red">{{ anime.score }}</strong></p>
                  <p class="m-0">Rank: {{ anime.rank }}</p>
                  <p class="m-0">Popularity: {{ anime.popularity }}</p>
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-2 border-top-0 bg-secondary">
                <div class="text-center m-1">
                  <a
                    @click.prevent="getAnimeDetail(anime.mal_id)"
                    class="btn btn-sm btn-danger mt-auto"
                    href="#"
                    >Detail</a
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
  name: 'Recommendations',
  computed: {
    mangas() {
      return this.$store.state.topMangas;
    },
    animes() {
      return this.$store.state.topAnimes;
    },
  },
  created() {
    this.$store.dispatch("getTopMangas");
    this.$store.dispatch("getTopAnimes");
  },
  methods: {
    getAnimeDetail(id) {
      this.$router.push(`/anime/${id}`)
    },
    getMangaDetail(id) {
      this.$router.push(`/manga/${id}`);
    }
  }
}
</script>

<style>

</style>