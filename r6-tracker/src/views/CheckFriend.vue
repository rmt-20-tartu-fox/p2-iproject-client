<template>
  <!-- eslint-disable -->
  <div class='checkFriend'>
    <div class="searchPlayer">

      <h1 style="color:white;"><b><i>SEARCH OTHER PLAYER</i></b></h1>
      <form @submit.prevent="checkFriend">
        <div class="form-group">
          <h4 style="color:white;"><b><i>INPUT USERNAME</i></b></h4>
          <input type="text" class="form-control" placeholder="Enter Username" v-model="friend">
        </div>

        <button type="submit" class="btn btn-primary" style="width:100%;">Search</button>
      </form>

    </div>

    <div v-if='myFriend === null' class='loading'>
      <img src='http://i.imgur.com/aCK8eiA.gif'>
    </div>

    <div v-if='myFriend !== null'>
      <div class="card text-white bg-dark mb-3 friendCard" style="max-width: 20rem;">

          <img v-bind:src='myFriend.statistic.icon' style="width:300px;">
          <div class="friendContent">
            <div class="card-header">{{myFriend.username}}</div>
            <div class="card-body playerContent">
              <h5 class="card-title" style="font-weight: bold;">{{myFriend.statistic.rank}}</h5>
              <div class='friendStatistic'>
                <p class="card-text">K/D ratio: {{myFriend.statistic.KD}}</p>
                <p class="card-text">Win Rate: {{myFriend.statistic.winRate}}</p>
                <p class="card-text">Win : {{myFriend.statistic.wins}}</p>
                <p class="card-text">Losses : {{myFriend.statistic.losses}}</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'CheckFriend',
  data(){
    return {
      friend: ''
    }
  },
  computed: {
    myFriend(){
      return this.$store.state.friend
    }
  },
  created(){
    if (localStorage.access_token){
      this.$store.commit('SET_ISLOGIN', true)
    }
  },
  methods: {
    checkFriend(){
      let payload = {
        friend: this.friend
      }
      // console.log(this.friend)
      this.$store.commit('SET_FRIEND', null)
      this.$store.dispatch('checkFriend', payload)
    }
  }
}
</script>

<style>
.checkFriend{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.loading{
  height:70vh;
  width: 40vw;
  padding-left: 30px;
  /* padding-right:-10px ; */
  position: static;
  margin-left: 7vw;
}
.friendCard{
  height: 70vh;
  width: 40vw;
  margin-left: 15vw;
  margin-top:3vh;
  position: static;
  margin-right: 10vw;
}
.searchPlayer{
  position: static;
}
.playerContent{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
