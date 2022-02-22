<template>
  <div>
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <!-- allproduct banner  -->
        <div class="py-1 mb-3" style="background-color: #636e72">
          <div class="container px-4 px-lg-5 my-1">
            <div class="text-center text-light">
              <h6 class="display-5 fw-bolder">List Manga</h6>
            </div>
          </div>
        </div>
        <!-- allproduct banner  -->

        <!-- pagination  -->
        <div
          style="display: flex; flex-direction: row; justify-content: center"
        >
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li
              class="page-item"
              v-for="(n, i) in pagination.totalPage"
              :key="i"
            >
              <a class="page-link" href="#" @click.prevent="page(n)">{{ n }}</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>

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
  name: "ListManga",
  computed: {
    mangas() {
      return this.$store.state.mangas;
    },
    pagination() {
      return this.$store.state.paginationManga;
    },
  },
  created() {
    this.$store.dispatch("getMangas");
  },
  methods: {
    page(n) {
      this.$store.commit("setPageManga", n);
      this.$store.dispatch("getMangas");
    },
    getMangaDetail(id) {
      this.$router.push(`/manga/${id}`);
    },
  },
};
</script>

<style scoped>
</style>