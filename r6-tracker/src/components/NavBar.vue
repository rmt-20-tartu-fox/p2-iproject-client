<template>
  <!-- eslint-disable -->
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="" @click.prevent="toPage('Home')"><img src='https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/DAwqy5hMljnxm7evA5ASN/c902c02d624b1cd2712a8cda5e891928/r6s-y6-logo.png' ></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: white; font-family:system-ui; font-weight:bold;">
              STRATEGIES
            </a>
            <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <li><a class="nav-link dropdown-item" href="" @click.prevent="toPage('StratsList')" style="color: white; font-family:system-ui; font-weight:bold;">STRATEGIES</a></li>
              <li><hr  v-if='$store.state.isLogin === true' class="dropdown-divider"></li>
              <li><a  v-if='$store.state.isLogin === true' class="nav-link dropdown-item" href="" @click.prevent="toPage('AddStrat')" style="color: white; font-family:system-ui; font-weight:bold;">NEW STRATEGIES</a></li>
              <li><hr  v-if='$store.state.isLogin === true' class="dropdown-divider"></li>
              <li><a  v-if='$store.state.isLogin === true' class="nav-link dropdown-item" href="" @click.prevent="toPage('MyStrat')" style="color: white; font-family:system-ui; font-weight:bold;">MY STRATEGIES</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="" @click.prevent="toPage('CheckFriend')" style="color: white; font-family:system-ui; font-weight:bold;">PLAYERS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="" @click.prevent="toPage('LoginForm')" style="color: white; font-family:system-ui; font-weight:bold;" v-if='$store.state.isLogin === false'>LOGIN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="" @click.prevent="userLogout" style="color: white; font-family:system-ui; font-weight:bold;" v-if='$store.state.isLogin === true'>LOGOUT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
export default {
  name: 'NavBar',
  created(){
    if (localStorage.access_token){
      this.$store.commit('SET_ISLOGIN', true)
    }
  },
  methods: {
    toPage(pageName){
      this.$store.commit('SET_FRIEND', null)
      this.$router.push({name: pageName})

    },
    userLogout(){
      localStorage.removeItem('access_token')
       this.$store.commit('SET_ISLOGIN', false)
      this.$router.push({name: 'LoginForm'})
    }
  }
}
</script>

<style>

</style>
