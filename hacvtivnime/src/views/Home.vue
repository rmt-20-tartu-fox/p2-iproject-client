<template>
  <div class="home">
    <ListManga></ListManga>
  </div>
</template>

<script>
// @ is an alias to /src
import ListManga from './ListManga.vue'

export default {
  name: 'Home',
  components: {
    ListManga
  }
}
</script>
