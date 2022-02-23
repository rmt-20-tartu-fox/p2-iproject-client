<template>
  <div class="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
    <div class="py-4 pl-6 pr-10 rounded-xl hover:bg-gray-800">
      <button
        @click.prevent="rootHomeHanlder"
        class="p-2 rounded-xl bg-cyan-800 focus:bg-cyan-700 hover:bg-cyan-600 flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </button>
    </div>
    <div class="py-4 pl-6 pr-10 rounded-xl hover:bg-gray-800">
      <button
        class="p-2 rounded-xl bg-cyan-800 focus:bg-cyan-700 hover:bg-cyan-600 flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
          />
        </svg>
      </button>
    </div>
    <div class="py-4 pl-6 pr-10 rounded-xl hover:bg-gray-800">
      <button
        class="p-2 rounded-xl bg-cyan-800 focus:bg-cyan-700 hover:bg-cyan-600 flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNavbar",
  methods: {
    rootHomeHanlder() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
