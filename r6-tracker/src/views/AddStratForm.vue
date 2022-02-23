<template>
<!-- eslint-disable  -->
  <div class='addForm'>
    <h1 style="color:white;"><b><i>NEW STRATEGY</i></b></h1>
    <form @submit.prevent="addNewStrat">
      <div class="roleMap">
        <select class="form-select selectClass" aria-label=".form-select-sm example" v-on:change='(event) => pickRole(event)' v-model="role">
          <option selected value="" disabled>Choose Your Role</option>
          <option v-bind:value="'Defend'" >DEFEND</option>
          <option v-bind:value="'Attack'">ATTACK</option>
        </select>
  
        <select class="form-select selectClass" aria-label=".form-select-sm example" v-model='selectedMap' >
            <option selected value="" disabled>Choose A Map</option>
            <option v-for='map in maps' v-bind:key='map.id' v-bind:value="map.id">{{map.name}}</option>
        </select>

      </div>
      <br>

      <div class="form-group descStrat">
        <h2 for="exampleFormControlTextarea1" style="color:white; font-weight:bold;opacity:0.8;" class="box"><i>Describe Your Strategy</i></h2>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="description"></textarea>
      </div>

      <button type="submit" class="btn btn-primary" style="width:40%"><h5 style="color:white;"><b><i>CREATE STRATEGY</i></b></h5></button>

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
import swal from 'sweetalert';
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
        swal({
              title: `Choose Proper Operator`,
              icon: "error",
              button: "OK!",
            });
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
        if (payload.description !== ''){
          console.log(payload)
          this.$store.dispatch('addNewStrat', payload)
            .then(() => {
              this.$router.push({name: 'StratsList'})
            })
            .catch((err) => {
              console.log(err)
            })

        } else {
          swal({
              title: `Description Is Required`,
              icon: "error",
              button: "OK!",
            });
        }
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
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

.descStrat{
  width: 70vw;
}

.selectClass{
  width: 40%;
  height: 50px;
}

.box {
  position: relative;
  /* height:  400px;
  width: 380px; */
  display: block;
  background: linear-gradient(0deg, black, #444444);
}

.glowing::before{
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(45deg, #e8f74d, #ff6600d9, #00ff66, #13ff13, #ad27ad, #bd2681, #6512b9, #ff3300de, #5aabde);
  background-size: 400%;
  width: calc(100% + 5px);
  height: calc(100% + 5px);
  z-index: -1;
  animation: glower 20s linear infinite;
}

@keyframes glower {
  0% {
    background-position: 0 0;
  }
  
  50% {
    background-position: 400% 0;
  }
  
  100% {
    background-position: 0 0;
  }
}
</style>