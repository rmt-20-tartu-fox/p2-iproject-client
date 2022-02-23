<template>
<!-- eslint-disable  -->

  <div class='opDetail' v-if='operator !== null'>
    <div class='vidRole'>
      <img v-bind:src='operator.imageUrl' class='imgOp'>
      
      
      <div class="role">
        <iframe class='vid' v-bind:src='`https://www.youtube.com/embed/${operator.videoUrl}?autoplay=1`' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1 style="color:white; border-radius:30px; width: 120%;" v-if='operator.role === "Defender"' class='bg-primary'><b><i>{{operator.role.toUpperCase()}}</i></b><img src="data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path fill='%2324262a' d='M19.27,9.74l-4.25,2.17L10.73,9.7L8.15,28h13.7L19.27,9.74z M21.23,7.01V2h-2.88v1.73h-1.96V2h-2.78v1.73h-1.96V2H8.77v4.96l6.25,3.51L21.23,7.01z'/></svg>" style="width: 40px;"></h1>
        <h1 style="color:white; border-radius:30px; width: 120%;" v-if='operator.role === "Attacker"' class='bg-warning'><b><i>{{operator.role.toUpperCase()}}</i></b><img src="data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path fill='%2324262a' d='M8.32,19.16l-5.54,5.54H2V28h3.31v-0.79l5.54-5.54H8.32V19.16z M25.2,2L10.29,17.18L8.5,15.4l-0.94,0.94l1.87,1.87v2.36h2.36l1.87,1.87l0.94-0.94l-1.78-1.78L28,4.8V2H25.2z M21.68,19.16v2.52h-2.52l5.54,5.54V28H28v-3.31h-0.78L21.68,19.16z M14.6,11.98L4.8,2H2v2.8l9.98,9.8L14.6,11.98z M20.57,18.21l1.87-1.87L21.5,15.4l-1.78,1.78l-1.67-1.71l-2.56,2.56l1.7,1.67L15.4,21.5l0.94,0.94l1.87-1.87h2.36V18.21z'/></svg>" style="width:40px;"></h1>
        <div class="contain-CA"></div>
        <div class='codeAb bg-dark'>
          <h1 style="color:white;" class='box-CA'><b><i>CODENAME : {{operator.name.toUpperCase()}}</i></b></h1>
          <h3 style="color:white;" class='box-CA'><b><i>ABILITY : {{operator.ability.toUpperCase()}}</i></b><img style="width:150px;" v-bind:src='operator.iconUrl'></h3>
        </div>
      </div>
      

    </div>
    <div class='opContent box' style="border-radius:12px; opacity:0.8;">
        <h4 style="color:white; text-align: center;"><b><i>"{{operator.quote}}"" --{{operator.name.toUpperCase()}}</i></b></h4>
        <h5 style="color:white; text-align: left;"><b><i>{{operator.content}} -- Harry(Director of Rainbow)</i></b></h5>
    </div>
    
    <!-- <youtube-iframe :video-id="fezVmNKHoE"></youtube-iframe> -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'DetailOperator',
  created(){
    this.$store.dispatch('getOneOperator', this.$route.params.id)
    if (localStorage.access_token){
      this.$store.commit('SET_ISLOGIN', true)
    }
  },
  computed: {
    operator(){
      return this.$store.state.operator
    }
  }
}
</script>

<style>
.opDetail{
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  /* position: absolute;
  left: 70px; */
  margin-left:70px ;
  align-items: flex-start;
}
.imgOp{
  width: 800px;
  height: 700px;
  align-self: flex-start;
}
.vid{
  width: 120%;
  height: 50%;
}
.vidRole{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.opContent{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  align-self: flex-start;
  /* background-color: grey; */
  width: 60vw;
}
.codeAb{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  /* background-color: ; */
  border-radius: 20px;
  width: 120%;
  opacity: 0.8;
}
.contain-CA {
    opacity: 0.3;
    background-color: #c3c3c3;
}
.box-CA {
    opacity: 1;
    /* background-color: #ffffff; */
}
</style>
