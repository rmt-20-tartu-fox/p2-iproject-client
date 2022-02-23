<template>
  <b-navbar toggleable="lg" type="light mt-3">
    <b-navbar-brand href="/" style="font-weight: bold; font-size: 30px;" class="mx-5 text-secondary">siredsport</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-nav-form class="my-1 mx-5">
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mx-5">
        <b-nav-item href="#" class="mx-4"><b-icon icon="cart2" aria-hidden="true"></b-icon> Cart</b-nav-item>
        <b-nav-item href="#" class="mx-4"><b-icon icon="card-checklist" aria-hidden="true"></b-icon> Order</b-nav-item>
          <b-nav-item href="#" class="">
            <router-link to="/login">
              <button class="btn btn-outline-secondary">Login</button>
            </router-link>
          </b-nav-item>
          <b-nav-item href="#" class="">
            <router-link to="/register">
              <button class="btn btn-outline-secondary">Register</button>
            </router-link>
          </b-nav-item>
        <b-nav-item href="#" class="mx-4"><b-icon icon="arrow-left-square" aria-hidden="true"></b-icon> Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style>

</style>