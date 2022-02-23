<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid row justify-content-between">
          <router-link class="navbar-brand col-2" to="/"
            >DiagnosTool</router-link
          >
          <button
            class="navbar-toggler col-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse col-6 justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/diagnose"
                  >Symptom Checker</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/location"
                  >Hospitals</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/chat">Chat</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view />
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  components: {
    HFooter,
  },
};
</script>
<style>
#app {
  width: 80%;
  margin: 0 auto;
  font-size: 1rem !important;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.card {
  padding: 20px;
  width: 60%;
  margin: 0 auto;
}

body {
  background-color: #fff;
}

.navbar {
  background-color: #9e9ea7 !important;
}
</style>
