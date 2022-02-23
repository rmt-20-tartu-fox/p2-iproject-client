<template>
  <div class="sidebar">
    <div class="categories">
      <h1>Categories</h1>
      <hr />
      <sidebar-button
        v-for="category in categories"
        :key="category.id"
        :category="category"
      ></sidebar-button>
    </div>
    <hr />
    <div class="addNewMeme">
      Add Meme
      <a href="" v-on:click.prevent="changePage('/addmeme')"
        ><img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
          alt=""
      /></a>
    </div>
  </div>
</template>

<script>
import SidebarButton from "./SidebarButton.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarButton,
  },
  data() {
    return {
      CategoryId: "",
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    changePage(to) {
      this.$router.push(to);
    },
  },
};
</script>

<style></style>
