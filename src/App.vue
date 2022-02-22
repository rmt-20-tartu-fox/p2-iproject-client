<template>
  <div id="app">
    <div class="navbar-menu flex-row">
      <nav class="navMenu">
        <a href="#"> home </a>
        <a href="#"> bookmark </a>
        <a href="#"> login </a>
        <a href="#"> logout </a>
        <!-- <div class="dot"></div> -->
      </nav>
    </div>
    <router-view />
  </div>
</template>

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

/* NAVBAR */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

.navbar-menu {
  background-color: #272727;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: 60px;
}

.navMenu {
  z-index: 1000;
  display: flex;
  max-width: 100%;
  top: 50%;
  left: 50%;
}

.navMenu a {
  color: #f6f4e6;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  width: 150px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.navMenu a:hover {
  color: #fddb3a;
}
</style>
