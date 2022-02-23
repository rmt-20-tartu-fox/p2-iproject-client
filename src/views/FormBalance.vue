<template>
  <div>
    <div class="row"></div>
    <h1 class="text-center">Add Balance</h1>
    <div class="col-md-6 offset-md-3">
      <form
        class="validated-form"
        enctype="multipart/form-data"
        @submit.prevent="submitBalance"
      >
        <div class="input-group mb-3">
          <label for="title" class="form-label">Title</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Education savings / Car savings / Cash"
              id="title"
              aria-describedby="value-label"
              v-model="form.title"
              required
            />
          </div>
        </div>
        <div class="input-group mb-3">
          <label for="type" class="form-label">Type</label>
          <div class="input-group">
            <select class="custom-select custom-select-sm" v-model="form.type">
              <option value="" disabled selected>Open this select menu</option>
              <option value="IDR">IDR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
          </div>
        </div>

        <div class="mb-3">
          <button type="submit" class="btn btn-success">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        type: "",
        crypto: false,
      },
    };
  },
  computed: {
    balances() {
      return this.$store.state.balances;
    },
  },
  methods: {
    submitBalance() {
      this.$store.dispatch("submitBalance", this.form);
    },
  },
  created() {},
};
</script>

<style></style>
