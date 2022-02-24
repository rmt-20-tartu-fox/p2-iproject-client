<template>
  <button v-on:click.prevent="fetchMemesDb(category.id)">
    {{ category.name }}
  </button>
</template>

<script>
export default {
  name: "SidebarButton",
  props: ["category"],
  methods: {
    fetchMemesDb(CategoryId) {
      this.$store.dispatch("fetchMemesDb", CategoryId);
    },
  },
};
</script>

<style></style>
