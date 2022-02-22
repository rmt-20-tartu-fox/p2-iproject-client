<template>
  <div class="home">
    <Recommendations></Recommendations>
  </div>
</template>

<script>
// @ is an alias to /src
import Recommendations from './Recommendations.vue'

export default {
  name: 'Home',
  components: {
    Recommendations
  }
}
</script>
