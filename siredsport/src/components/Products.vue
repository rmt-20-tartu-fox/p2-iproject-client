<template>
  <div>
    <div>
      <div v-if="!products.length" style="margin-top: 100px;">
        <b-icon class="mt-5" icon="three-dots" animation="cylon" font-scale="4"></b-icon>
      </div>
      <div class="row d-flex justify-content-center mt-5 container-fluid" v-if="products" >
        <b-col sm="auto" v-for="product in products" :key="product.id">
          <Card :product="product" />
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue"
export default {
  name: "Products",
  props: [ "products" ],
  components: {
    Card,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
