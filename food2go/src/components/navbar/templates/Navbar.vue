<template>
  <div class="h-20 w-full">
    <div class="w-full h-full flex flex-row justify-between px-72">
      <div class="w-1/6 flex justify-start items-center">
        <router-link
          class="text-3xl text-slate-900"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
          to="/"
          >Food 2 Go</router-link
        >
      </div>

      <div
        id="nav"
        class="w-1/2 h-full flex flex-row justify-center items-center gap-x-16"
      >
        <router-link
          to="/restaurants"
          class="text-lg text-slate-100 hover:text-red-600"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
        >
          Restaurant List
        </router-link>
        <router-link
          to="/restaurants/add"
          class="text-lg text-slate-900 hover:text-red-600"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
        >
          Add Restaurant
        </router-link>
        <router-link
          to="/wishlists"
          class="text-lg text-slate-900 hover:text-red-600"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
        >
          Wishlist
        </router-link>
      </div>

      <div class="w-1/6 h-full flex justify-center items-center">
        <HomeDropdown></HomeDropdown>
      </div>
    </div>
  </div>
</template>

<script>
import HomeDropdown from "../organisms/HomeDropdown.vue";
export default {
  name: "Navbar",
  components: {
    HomeDropdown,
  },
};
</script>

<style scoped>
#nav a {
  font-weight: bold;
  color: #252b31;
}

#nav a:hover {
  font-weight: bold;
  color: #ee544a;
}

#nav a.router-link-exact-active {
  color: #e42828;
}
</style>
