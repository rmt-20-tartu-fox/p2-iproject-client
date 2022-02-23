<template>
  <div>
    <div
      class="min-w-screen min-h-screen bg-gray-800 flex items-center p-5 lg:p-10 overflow-hidden relative"
    >
      <div
        class="w-full max-w-4xl rounded bg-cyan-600 shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left"
      >
        <div class="md:flex items-center -mx-10">
          <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 space-x-4">
            <div class="relative border-4 shadow-2xl">
              <!-- <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div> -->
              <img
                :src="`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`"
                alt=""
              />
              <!-- <iframe
                height="288px"
                width="384px"
                :src="movieDetail.trailerUrl"
                frameborder="0"
              ></iframe> -->
            </div>
          </div>
          <div
            class="w-full md:w-1/2 px-10 bg-gray-400 border-cyan-700 border-2 rounded-lg shadow-2xl py-6"
          >
            <div class="mb-5">
              <h1 class="font-bold uppercase text-2xl mb-5">
                {{ movieDetail.original_title }}
              </h1>
              <p class="text-sm">
                {{ movieDetail.overview }}
              </p>
            </div>
            <div>
              <div class="inline-block align-bottom mr-5">
                <div>
                  <span class="text-sm font-medium leading-none"
                    >Release Date :
                  </span>
                  <span>{{ movieDetail.release_date }}</span>
                </div>
                <div>
                  <span class="text-sm font-medium leading-none"
                    >Rating :
                  </span>
                  <span>{{ movieDetail.vote_average }}</span>
                </div>
              </div>
              <br class="border-2" />
              <div class="flex flex-row gap-4 py-4">
                <button
                  type="button"
                  class="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide bg-cyan-600 hover:bg-orange-600 hover:text-black transition duration-200"
                >
                  Rent 3-days
                </button>
                <button
                  type="button"
                  class="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide bg-cyan-600 hover:bg-orange-600 hover:text-black transition duration-200"
                >
                  Rent 1-week
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  data() {
    return {
      price: {
        id: null,
      },
    };
  },
  computed: {
    movieDetail() {
      return this.$store.state.movieDetail;
    },
    prices() {
      return this.$store.state.prices;
    },
  },
  methods: {
    async fetchDataMovieDetail() {
      await this.$store.dispatch("fetchDataMovieDetail", this.$route.params.id);
    },

    fetchDataPrice() {
      this.$store.dispatch("fetchDataPrice");
    },
  },
  created() {
    this.fetchDataMovieDetail();
    this.fetchDataPrice();
  },
};
</script>

<style></style>
