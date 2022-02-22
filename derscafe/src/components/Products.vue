<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="light mt-3">
        <b-navbar-brand href="/" style="font-weight: bold; font-size: 30px;" class="mx-5 text-secondary">derscafe</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto mx-5">
            <b-nav-item href="#">Cart</b-nav-item>
            <b-nav-item href="#">Order</b-nav-item>
            <b-nav-item href="#">Logout</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-nav-form class="my-1">
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <div>
        <div class="mt-3">
          <b-button-group>
            <b-button variant="info">Coffee</b-button>
            <b-button variant="warning">Warning</b-button>
          </b-button-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
