<template>
  <div>
    <div>
      <!-- skleton loading-->
      <div class="row d-flex justify-content-center container-fluid" v-if="!products.length" >
        <div class="col-3">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
        <div class="col-3 my-1">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
        <div class="col-3 my-1">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
        <div class="col-3 my-1">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
                <div class="col-3">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
        <div class="col-3 my-1">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
        <div class="col-3 my-1">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
        <div class="col-3 my-1">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
                <div class="col-3">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
        <div class="col-3 my-1">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
        <div class="col-3 my-1">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
        <div class="col-3 my-1">
          <b-card>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="55%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
          </b-card>
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-5 container-fluid" v-if="products.length" >
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
