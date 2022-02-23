<template>
  <div id="app">
   <nav id="main_nav" class="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow" style="width:100%">
        <div class="container d-flex justify-content-between align-items-center">
            <router-link class="navbar-brand h1" to="/">
                <img class="mx-3 mb-2" src="./assets/fdnslogo.png" alt="" width="40" height="45">
                <span class="text-dark h4"><strong>FDNS</strong></span> <span class="text-primary h4">Library</span>
            </router-link>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="align-self-center justify-content-lg-between" id="navbar-toggler-success">
                <div class="flex-fill mx-xl-5 mb-2">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-xl-3 text-center text-dark">
                        <li class="nav-item">
                            <router-link class="nav-link btn-outline-primary rounded-pill px-3" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link btn-outline-primary rounded-pill px-3" to="/galery">Galery</router-link>
                        </li>
                        <li  v-if="showButton === false" class="nav-item">
                            <router-link class="nav-link btn-outline-primary rounded-pill px-3" to="/mybook">My Books</router-link>
                        </li>
                        <li v-if="showButton === false"  class="nav-item ml-5">
                            <router-link class="nav-link btn-outline-primary rounded-pill px-3" to="/login">Sign in</router-link>
                        </li>
                        <li v-if="showButton === false" class="nav-item">
                            <router-link class="nav-link btn-outline-primary rounded-pill px-3" to="/register">Sign up</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {
      showButton: false
    }
  },
  created(){
    if (localStorage.access_token) {
      this.showNavbar = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
