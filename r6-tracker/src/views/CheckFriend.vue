<template>
  <!-- eslint-disable -->
  <div>
    <h1>FRIEND</h1>
    <form @submit.prevent="checkFriend">
      <div class="form-group">
        <label for="exampleInputEmail1">Input Username</label>
        <input type="text" class="form-control" placeholder="Enter Username" v-model="friend">
      </div>

      <button type="submit" class="btn btn-primary">Search</button>
    </form>
    <div v-if='myFriend === null'>
      <img src='http://i.imgur.com/aCK8eiA.gif'>
    </div>
    <div v-if='myFriend !== null'>
      <div class="card text-white bg-dark mb-3" style="max-width: 40rem;">
        <div class='friendCard'>
          <img v-bind:src='myFriend.statistic.icon' style="width:300px;">
          <div class="friendContent">
            <div class="card-header">{{myFriend.username}}</div>
            <div class="card-body">
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
.friendCard{
  display: flex;
  flex-direction: row;
}

.friendContent{
  display: flex;
  flex-direction: column;
}

.friendStatistic{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
