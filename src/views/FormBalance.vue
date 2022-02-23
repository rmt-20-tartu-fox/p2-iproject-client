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
            <input
              type="text"
              class="form-control"
              placeholder="IDR / USD / BTC"
              id="type"
              aria-describedby="value-label"
              v-model="form.type"
              required
            />
          </div>
        </div>

        <div class="form-check form-switch">
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >Is it Cryptocurrency ?</label
          >
          <input
            type="checkbox"
            :value="true"
            v-model="form.crypto"
            class="form-check-input"
            id="flexSwitchCheckDefault"
            name="crypto"
          />
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
