<template>
  <!-- eslint-disable -->
  <div class="card shadow-lg mb-5 py-0 bg-dark shadow-lg border border-secondary opacity-25" style="width: 18rem;">
    <button class="fuller-button blue"  v-on:click.prevent='seeDetail(operator.id)'>
      <div class="imageCard">
        <img class="card-img-top  image1" alt="Card image cap" v-bind:src='operator.imageUrl'>
        <!-- <a href="" v-on:click.prevent='seeDetail(operator.id)'</a> -->
        
        <img class="card-img-top image2" v-bind:src='operator.iconUrl'>
      </div>
    </button>
    <!-- <div class="card-body " >
    </div> -->
    <button class="btn btn-link  btn-prmary" style="color:white;" v-on:click.prevent='selectOp(operator.id)' v-if='formNow === "add" && isClicked === false'><b>PICKED</b></button>
    <button class="btn btn-link btn-warning" style="color:black;" v-if='formNow === "add" && isClicked === true'><b>PICKED</b></button>
    <h5 class="card-title text-dark opName"><i style="font-weight:bold; padding-bottom:10px;">{{operator.name.toUpperCase()}}</i></h5>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'OpCard',
  props: ['operator', 'formNow'],
  data(){
    return {
      isClicked: false,
      counter: 0
    }
  },
  methods: {
    seeDetail(id){
      // console.log(id)
      // this.$store.dispatch('getOneOperator', id)
      this.$router.push({name: 'DetailOperator', params: {id}})
    },
    selectOp(id){
      // console.log(id)
      // this.selectedOperator.push(id)

      this.isClicked = true
      this.$emit('selectOp', +id, this.counter)
    }
  }
}
</script>

<style>
.imageCard{
  display: flex;
  flex-direction: column;
}
.image1 {
  position: relative;
  top: 0;
  left: 0;
  /* border: 1px red solid; */
}
.image2 {
  /* justify-self: flex-end;
  align-self: center; */
  position: absolute;
  top: 50%;
  left: 33%;
  /* border: 1px green solid; */
  width: 100px;
}

.opName{
  justify-self: flex-end;
  background-color: #c3c3c3;
}

.fuller-button {
	/* color: rgba(255,255,255,1); */
	background: none;
  border: none;
	border-radius: 0;
	/* padding: 1.2em 2em; */
	letter-spacing: 0.35em;
	font-size: 0.7em;
	transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
	margin: 1em;

}

.blue {
  box-shadow: inset 0 0 1em rgba(0,170,170,0.5), 0 0 1em rgba(0,170,170,0.5);
  /* border: #0dd solid 2px; */
}

.blue:hover {
  background-color: #0dd;
  box-shadow: inset 0 0 0 rgba(0,170,170,0.5), 0 0 1.5em rgba(0,170,170,0.7);
}

</style>
