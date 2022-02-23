<template>
<!-- eslint-disable  -->
  <div class='addForm'>
    <form @submit.prevent="addNewStrat">
      <div class="roleMap">
        <select class="form-select bg-warning" aria-label="Default select example" v-on:change='(event) => pickRole(event)' v-model="role">
          <option selected value="" disabled>Choose Your Role</option>
          <option v-bind:value="'Defend'">Defend</option>
          <option v-bind:value="'Attack'">Attack</option>
        </select>
  
        <select class="form-select" aria-label=".form-select-sm example" v-model='selectedMap' >
            <option selected value="" disabled>Choose A Map</option>
            <option v-for='map in maps' v-bind:key='map.id' v-bind:value="map.id">{{map.name}}</option>
        </select>

      </div>

      <div class="form-group descStrat">
        <h2 for="exampleFormControlTextarea1" style="color:white; font-weight:bold; background-color: grey; opacity:0.8;"><i>Describe Your Strategy</i></h2>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Create Strat</button>

      <div class="container" v-if='role !==""'>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-5 row-cols-xl-5 justify-content-center" style="width:100%;">
          <div class="col-3 mb-5 mx-5"    v-for='operator in operators' v-bind:key='operator.id' >

            <!-- <div class="card  shadow-lg p-3 mb-5 bg-dark shadow-lg border border-secondary red" style="width: 18rem; border-bottom-left-radius: 75px;">
              <img class="card-img-top" alt="Card image cap" v-bind:src='operator.imageUrl'>
              <div class="card-body " >
                <h5 class="card-title text-dark">{{operator.name}}</h5>
                <button class="btn btn-link btn-outline-primary" v-on:click.prevent='selectOp(operator.id)'>PICK</button>
              </div>
            </div> -->
            <OpCard 
            v-bind:operator='operator'
            v-bind:formNow='formNow' 
            v-on:selectOp='selectOp'/>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
/* eslint-disable */
import OpCard from '../components/OpCard.vue'
export default {
  name: 'AddStrat',
  components: {
    OpCard
  },
  data(){
    return {
      role: '',
      selectedOperator: [],
      selectedMap: '',
      description: '',
      formNow: 'add'
    }
  },
  created(){
    this.$store.dispatch('getAllMaps')
    if (localStorage.access_token){
      this.$store.commit('SET_ISLOGIN', true)
    }
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
    selectOp(id, counter){
      console.log(id, ">>")
      counter++
      if (counter != 5){
        console.log('You Need 5 Operators')
      }
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
        console.log(payload)
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
.addForm{
  padding-top: 30px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.roleMap{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.descStrat{
  width: 70vw;
}

</style>