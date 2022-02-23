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
                  <h5 class="m-0">Synopsis:</h5>
                  <p class="m-0">{{ anime.synopsis }}</p>
                  <hr />
                  <p class="m-0">
                    Episodes:
                    <strong style="color: red">{{ anime.episodes }}</strong
                    >, Duration:
                    <strong style="color: green">{{ anime.duration }}</strong
                    >, Rating:
                    <strong style="color: red">{{ anime.score }}</strong
                    >, Rank: <strong style="color: red">{{ anime.rank }}</strong
                    >, Popularity:
                    <strong style="color: red">{{ anime.popularity }}</strong>
                  </p>
                  <h4 class="m-0">Studios: {{ anime.studios[0].name }}</h4>
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-2 border-top-0 bg-secondary">
                <div class="text-center">
                  <a
                    @click.prevent="addFavoriteAnime(anime.mal_id)"
                    class="btn btn-sm btn-danger mt-auto"
                    href="#"
                    >Add to Favorite</a
                  >
                </div>
                <div class="text-center p-2" v-if="$store.state.isLoggedIn == true">
                  <a @click.prevent="payButton" class="btn btn-sm btn-primary mt-auto" href="#"
                    >Order this anime</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="comments">
      <Disqus shortname="hactivnime" />
    </div>
  </div>
</template>

<script>
import { Disqus } from "vue-disqus";
export default {
  name: "AnimeDetail",
  components: {
    Disqus,
  },
  data() {
    return {
      baseUrl: window.location.origin,
      identifier: this.$route.path,
      title: this.$page.title,
      category_id: "anime",
    };
  },
  computed: {
    anime() {
      return this.$store.state.anime;
    },
  },
  created() {
    if (localStorage.access_token) this.$store.commit('setIsLoggedIn', true)
    this.$store.dispatch("getAnimeDetail", this.$route.params.id);
  },
  methods: {
    addFavoriteAnime(id) {
      this.$store.dispatch("addFavoriteAnime", id);
    },
    payButton() {
      this.$router.push('/payment')
    },
  },
};
</script>

<style>
</style>