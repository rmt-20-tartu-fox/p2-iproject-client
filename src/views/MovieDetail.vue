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
            class="w-full md:w-1/2 px-10 bg-gray-400 border-cyan-700 border-2 rounded-lg shadow-2xl"
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
              <!-- <div>
                <img height="180" width="180" :src="qrCode" alt="" />
              </div> -->
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
  computed: {
    movieDetail() {
      return this.$store.state.movieDetail;
    },
  },
};
</script>

<style></style>
