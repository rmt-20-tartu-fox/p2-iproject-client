<template>
  <!-- eslint-disable -->
  <div class="homePage">
    <div style="padding-bottom: 45px; padding-top: 20px;">

      <button type="button" class='btn btn-warning' @click.prevent="filterOperator('Attacker')" ><img src="data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path fill='%2324262a' d='M8.32,19.16l-5.54,5.54H2V28h3.31v-0.79l5.54-5.54H8.32V19.16z M25.2,2L10.29,17.18L8.5,15.4l-0.94,0.94l1.87,1.87v2.36h2.36l1.87,1.87l0.94-0.94l-1.78-1.78L28,4.8V2H25.2z M21.68,19.16v2.52h-2.52l5.54,5.54V28H28v-3.31h-0.78L21.68,19.16z M14.6,11.98L4.8,2H2v2.8l9.98,9.8L14.6,11.98z M20.57,18.21l1.87-1.87L21.5,15.4l-1.78,1.78l-1.67-1.71l-2.56,2.56l1.7,1.67L15.4,21.5l0.94,0.94l1.87-1.87h2.36V18.21z'/></svg>" style="width:40px;">ATTACKER</button>
      <span style="padding-left: 10px;"></span>
      <button type="button" class='btn btn-primary'@click.prevent="filterOperator('Defender')">DEFENDER<img src="data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path fill='%2324262a' d='M19.27,9.74l-4.25,2.17L10.73,9.7L8.15,28h13.7L19.27,9.74z M21.23,7.01V2h-2.88v1.73h-1.96V2h-2.78v1.73h-1.96V2H8.77v4.96l6.25,3.51L21.23,7.01z'/></svg>" style="width: 40px;"></button>
    </div>
    <div class="container">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-5 row-cols-xl-5 justify-content-center" style="width:100%;">
        <div class="col-3 mb-5 mx-5"    v-for='operator in operators' v-bind:key='operator.id' >

          <!-- <div class="card  shadow-lg p-3 mb-5 bg-dark shadow-lg border border-secondary red" style="width: 18rem; border-bottom-left-radius: 75px;">
            <img class="card-img-top" alt="Card image cap" v-bind:src='operator.imageUrl'>
            <div class="card-body " >
              <h5 class="card-title text-dark">{{operator.name}}</h5>
              <button class="btn btn-link btn-outline-primary" v-on:click.prevent='seeDetail(operator.id)'>See Detail</button>
            </div>
          </div> -->
          <OpCard v-bind:operator='operator'/>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="row row-cols-xl-5">
    <div class="col-2" v-for='operator in operators' v-bind:key='operator.id' >
      <div class="card  shadow-lg p-3 mb-5 bg-dark shadow-lg border border-secondary red" style="width: 18rem; border-bottom-left-radius: 75px;">
        <img class="card-img-top" alt="Card image cap" v-bind:src='operator.imageUrl'>
        <div class="card-body " >
          <h5 class="card-title text-dark">{{operator.name}}</h5>
          <button class="btn btn-link btn-outline-primary" v-on:click.prevent='seeDetail(operator.id)'>See Detail</button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import OpCard from '../components/OpCard.vue'
export default {
  name: 'Home',
  components: {
    OpCard
  },
  created(){
    this.$store.dispatch('getAllOperators',this.role)
  },
  computed: {
    operators(){
      return this.$store.state.operators
    }
  },
  data(){
    return {
      role: ''
    }
  },
  methods: {
    filterOperator(role){
      // console.log(role)
      this.role = role
      this.$store.dispatch('getAllOperators', role)
    },
    // seeDetail(id){
    //   // console.log(id)
    //   // this.$store.dispatch('getOneOperator', id)
    //   this.$router.push({name: 'DetailOperator', params: {id}})
    // }
  }
}
</script>
