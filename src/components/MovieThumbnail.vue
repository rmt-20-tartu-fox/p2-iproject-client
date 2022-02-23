<template>
  <div>
    <div class="group w-full">
      <div class="relative">
        <img
          :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
          class="w-full h-full object-center object-cover opacity-90 group-hover:opacity-100 rounded-lg shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
        />
        <div class="flex justify-end items-center h-16">
          <button
            @click.prevent="fetchDataMovieDetail(movie.id)"
            type="button"
            class="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide bg-cyan-600 hover:bg-orange-600 hover:text-black transition duration-200"
          >
            See Detail
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieThumbnail",
  props: ["movie"],
  methods: {
    async fetchDataMovieDetail(id) {
      await this.$store.dispatch("fetchDataMovieDetail", id);
      this.$router.push(`/${id}`);
    },
  },
};
</script>

<style></style>
