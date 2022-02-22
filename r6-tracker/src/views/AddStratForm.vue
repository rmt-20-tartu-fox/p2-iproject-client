<template>
<!-- eslint-disable  -->
  <div>
    <form @submit.prevent="addNewStrat">
      <select class="form-select" aria-label="Default select example" v-on:change='(event) => pickRole(event)' v-model="role">
        <option v-bind:value="'Defend'">Defend</option>
        <option v-bind:value="'Attack'">Attack</option>
      </select>

      <select class="form-select form-select-sm btn  btn-primary-outline" aria-label=".form-select-sm example" v-model='selectedMap' >
          <option selected value="" disabled>Choose A Map</option>
          <option v-for='map in maps' v-bind:key='map.id' v-bind:value="map.id">{{map.name}}</option>
      </select>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"></textarea>
      </div>

      <div class="container">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-5 row-cols-xl-5 justify-content-center" style="width:100%;">
          <div class="col-3 mb-5 mx-5"    v-for='operator in operators' v-bind:key='operator.id' >

            <div class="card  shadow-lg p-3 mb-5 bg-dark shadow-lg border border-secondary red" style="width: 18rem; border-bottom-left-radius: 75px;">
              <img class="card-img-top" alt="Card image cap" v-bind:src='operator.imageUrl'>
              <div class="card-body " >
                <h5 class="card-title text-dark">{{operator.name}}</h5>
                <button class="btn btn-link btn-outline-primary" v-on:click.prevent='selectOp(operator.id)'>PICK</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <button type="submit">Create Strat</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'AddStrat',
  data(){
    return {
      role: '',
      selectedOperator: [],
      selectedMap: '',
      description: ''
    }
  },
  created(){
    this.$store.dispatch('getAllMaps')
  },
  computed:{
    operators(){
      return this.$store.state.operators
    },
    maps(){
      return this.$store.state.maps
    }
  },
  methods : {
    pickRole(){
      console.log(this.role)
      this.$store.dispatch('getAllOperators', this.role)
    },
    selectOp(id){
      console.log(id)
      this.selectedOperator.push(id)
    },
    addNewStrat(){
      if (this.selectedOperator.length !== 5){
        console.log('Choose Proper Operator')
      } else{
        // console.log(this.role, this.selectedMap, this.selectedOperator, this.description, "<<<<")
        let payload = {
          currentRole: this.role,
          Op1Id: this.selectedOperator[0],
          Op2Id: this.selectedOperator[1],
          Op3Id: this.selectedOperator[2],
          Op4Id: this.selectedOperator[3],
          Op5Id: this.selectedOperator[4],
          MapId: this.selectedMap,
          description: this.description
        }

        this.$store.dispatch('addNewStrat', payload)
          .then(() => {
            this.$router.push({name: 'StratsList'})
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style>

</style>