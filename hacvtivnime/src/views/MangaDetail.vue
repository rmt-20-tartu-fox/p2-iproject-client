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
                :src="manga.images.jpg.large_image_url"
                alt="..."
              />
              <!-- Product details-->
              <div class="card-body">
                <div class="text-left">
                  <h4 class="fw-bolder m-0">Title: {{ manga.title }}</h4>
                  <hr class="m-1" />
                  <h5 class="m-0">Synopsis: </h5>
                  <p class="m-0">{{ manga.synopsis }}</p>
                  <hr />
                  <p class="m-0">
                    Chapters: <strong style="color:red">{{ manga.chapters }}</strong
                    >, Volume: <strong style="color:red">{{ manga.volumes }}</strong>, Rating: <strong style="color:red">{{ manga.scored }}</strong>,
                    Rank: <strong style="color:red">{{ manga.rank }}</strong>, Popularity: <strong style="color:red">{{ manga.popularity }}</strong>
                  </p>
                  <h4 class="m-0">Authors: {{ manga.authors[0].name }}</h4>
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-2 border-top-0 bg-secondary">
                <div class="text-center">
                  <a @click.prevent="addFavoriteManga(manga.mal_id)" class="btn btn-sm btn-danger mt-auto" href="#"
                    >Add to Favorite</a
                  >
                </div>
                <div class="text-center p-2" v-if="$store.state.isLoggedIn == true">
                  <a @click.prevent="payButton(manga.title)" class="btn btn-sm btn-primary mt-auto" href="#"
                    >Order this manga</a
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
  name: "MangaDetail",
  components: {
    Disqus,
  },
  data() {
    return {
      baseUrl: window.location.origin,
      identifier: this.$route.path,
      title: this.$page.title,
      category_id: "manga",
    };
  },
  computed: {
    manga() {
      return this.$store.state.manga;
    },
  },
  created() {
    if (localStorage.access_token) this.$store.commit('setIsLoggedIn', true)
    this.$store.dispatch("getMangaDetail", this.$route.params.id);
  },
  methods: {
    addFavoriteManga(id) {
      this.$store.dispatch("addFavoriteManga", id);
    },
    payButton() {
      this.$router.push('/payment')
    }
  }
};
</script>

<style>
</style>