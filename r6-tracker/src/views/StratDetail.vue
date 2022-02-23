<template>
  <!-- eslint-disable  -->
  <div style="padding-top:20px;">
    <h1 style="color:white;"><b><i>STRATEGY</i></b></h1>
    <div v-if='strat === null'>
      <img src='http://i.imgur.com/aCK8eiA.gif' style="width: 900px; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">
    </div>

    <div v-if='strat !== null' class="stratDetail">
      <div class="map">
        <div class='mapContent'>
          <h2 class='mapTitle'><b><i>{{strat.Map.name}}</i></b></h2>
          <img v-bind:src='strat.Map.imgUrl'>
        </div>
        <div class='description'>
          <p>{{strat.description}}</p>
        </div>
      </div>

      <div class="titleOp" style=" width:100vw;">
        <h2 class='title' ><b><i>OPERATORS</i></b></h2>
        <div class="row row-cols-xl-5 operator">
          <div class="col-2" v-for='operator in strat.myOperators' v-bind:key='operator.id' >
            <OpCard v-bind:operator='operator'/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
import OpCard from '../components/OpCard.vue'
export default {
  name: 'StratDetail',
  components: {
    OpCard
  },
  created(){
    this.$store.dispatch('getOneStrat', this.$route.params.id)
    this.$store.dispatch('getAllMaps')
    this.getQR()
    if (localStorage.access_token){
      this.$store.commit('SET_ISLOGIN', true)
    }
  },
  computed: {
    strat(){
      return this.$store.state.strat
    }
  },
  data(){
    return{
      url:`https://r6-tracker-v1.web.app${this.$route.path}`,
      qr: ''
    }
  },
  methods: {
    seeDetail(id){
      // console.log(id)
      // this.$store.dispatch('getOneOperator', id)
      this.$router.push({name: 'DetailOperator', params: {id}})
    },
    getQR(){
      axios.get(`https://api.happi.dev/v1/qrcode?data=${this.url}&width=100`, {
        headers: {
          "x-happi-key": 'b0ac3ev7Wm9t3T4HESZ58cRjDs2S9H3YtCQVkhKdv8LgHk92ycY2lJtJ'
        }
      })
        .then((resp) => {
          console.log(resp, "QR")
          this.qr = resp.data.qrcode
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
  }
}
</script>

<style>
.stratDetail{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.operator{
  padding-top: 30px ;
}

.map{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.mapContent{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description{
  height: 58vh;
  width: 40vw;
  overflow-y: scroll;
  background-color: grey;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: system-ui;
  opacity: 0.8;
  text-align: left;
  color: #000;
}
.mapTitle{
  color:white; 
  opacity:0.8; 
  font-weight:1000; 
  font-size: 40px;
  background-color: black;
  width: 30vw;
  align-self: center;
  border-radius: 20px;
}

.titleOp{
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top:30px ;

}

.title{
  color:white; 
  opacity:0.8; 
  font-weight:1000; 
  font-size: 40px;
  background-color: black;
  width: 30vw;
  align-self: center;
  border-radius: 20px;
}
</style>
