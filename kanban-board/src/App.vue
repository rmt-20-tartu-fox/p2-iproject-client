<template>
  <div id="app">
    <HFooter></HFooter>
    <router-view />
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  components: {
    HFooter,
  },
};
</script>

<style></style>
