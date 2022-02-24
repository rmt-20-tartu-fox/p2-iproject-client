<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid row justify-content-between">
          <router-link id="brand-link" class="navbar-brand col-2" to="/"
            ><i class="fa-solid fa-user-doctor"></i> | DiagnosTool</router-link
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
            align="right"
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
              <li id="chat" class="nav-item">
                <router-link class="nav-link" to="/chat"
                  >Live Chat <i class="fa-solid fa-angle-right"></i
                ></router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view />
    <HFooter id="footer"></HFooter>
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

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;
  border-radius: 16px;
}

#app label {
  text-align: left !important;
}

#brand-link {
  text-align: left;
}

.card {
  padding: 20px;
  width: 60%;
  margin: 0 auto;
}

body {
  background-color: #fff;
  text-align: left;
  font-size: 1rem !important;
}

body h1,
body p,
body label {
  text-align: left;
}

.navbar {
  background-color: #2d31fa !important;
}

nav {
  text-align: center !important;
  margin: 0 auto !important;
  border-radius: 10px 10px 0 0;
}

#footer {
  border-radius: 0 0 10px 10px;
  background-color: #051367 !important;
}

.navbar a {
  color: #dff6ff !important;
}

.navbar a:hover,
.navbar a:active {
  color: #f7f7f7 !important;
}

#chat {
  background-color: #dff6ff;
  border-radius: 24px;
  padding: 2px 6px;
  margin-left: 12px;
}

#chat a {
  color: #051367 !important;
}

#chat:hover,
#chat.active {
  background-color: #051367 !important;
}

#chat a:hover,
#chat a:active {
  color: #f7f7f7 !important;
}
</style>
