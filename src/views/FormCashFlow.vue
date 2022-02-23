<template>
  <div>
    <div class="row"></div>
    <h1 class="text-center">New Data</h1>
    <div class="col-md-6 offset-md-3">
      <form
        class="validated-form"
        enctype="multipart/form-data"
        @submit.prevent="submiHistory"
      >
        <div class="mb-3">
          <div class="mb-3 form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="course" class="form-label">Balance</label>
                <select
                  class="form-control"
                  id="course"
                  v-model="form.balance"
                  @change="onChange($event)"
                >
                  <option value="" hidden>Select Balance</option>
                  <option
                    v-for="balance in balances"
                    v-bind:value="balance.id"
                    v-bind:key="balance.id"
                  >
                    {{ balance.title }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <label for="value" class="form-label">Value</label>
                  <div class="input-group">
                    <span
                      class="input-group-text"
                      v-if="type === `IDR`"
                      id="value-label"
                      >Rp</span
                    >
                    <span
                      class="input-group-text"
                      v-if="type === `ETH`"
                      id="value-label"
                      >ETH</span
                    >
                    <span
                      class="input-group-text"
                      v-if="type === `USD`"
                      id="value-label"
                      >US$</span
                    >
                    <span
                      class="input-group-text"
                      v-if="type === `BTC`"
                      id="value-label"
                      >BTC</span
                    >
                    <span
                      class="input-group-text"
                      v-if="type === `EUR`"
                      id="value-label"
                      >€</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="0.00"
                      id="value"
                      aria-describedby="value-label"
                      v-model="form.value"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="formFile" class="form-label">Upload Image</label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            @change="previewFiles"
            name="image"
          />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-success">Add</button>
        </div>
      </form>
      <div class="col-xl-3 col-lg-6" v-if="type === `ETH`">
        <div class="card l-bg-cherry">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large">
              <i class="fa-brands fa-btc"></i>
            </div>
            <div class="mb-4">
              <h5 class="card-title mb-0">Etherium Rate in IDR</h5>
            </div>
            <div class="row align-items-center mb-2 d-flex">
              <div class="col-8">
                <h2 class="d-flex align-items-center mb-0">
                  {{ this.$store.state.rateEth }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6" v-if="type === `USD`">
        <div class="card l-bg-orange-dark">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large">
              <i class="fas fa-dollar-sign"></i>
            </div>
            <div class="mb-4">
              <h5 class="card-title mb-0">USD Rate in IDR</h5>
            </div>
            <div class="row align-items-center mb-2 d-flex">
              <div class="col-8">
                <h2 class="d-flex align-items-center mb-0">
                  {{ this.$store.state.rateUsd }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6" v-if="type === `EUR`">
        <div class="card l-bg-blue-dark">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large">
              <i class="fas fa-euro-sign"></i>
            </div>
            <div class="mb-4">
              <h5 class="card-title mb-0">EUR Rate in IDR</h5>
            </div>
            <div class="row align-items-center mb-2 d-flex">
              <div class="col-8">
                <h2 class="d-flex align-items-center mb-0">
                  {{ this.$store.state.rateEur }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6" v-if="type === `BTC`">
        <div class="card l-bg-green-dark">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large">
              <i class="fas fa-ticket-alt"></i>
            </div>
            <div class="mb-4">
              <h5 class="card-title mb-0">Bitcoin Rate in IDR</h5>
            </div>
            <div class="row align-items-center mb-2 d-flex">
              <div class="col-8">
                <h2 class="d-flex align-items-center mb-0">
                  {{ this.$store.state.rateBtc }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        balance: "",
        value: "",
        image: "",
        valueCrypto: "",
      },
      crypto: false,
    };
  },
  computed: {
    balances() {
      return this.$store.state.balances;
    },
    type() {
      return this.$store.state.type;
    },
  },
  methods: {
    fetchBalance() {
      this.$store.dispatch("fetchBalance");
    },
    onChange() {
      let temp = this.balances.find((e) => e.id === this.form.balance);
      this.$store.commit("SET_TYPE", temp.type);
    },
    submiHistory() {
      let formData = new FormData();
      formData.append("image", this.form.image);
      formData.append("BalanceId", this.form.balance);
      formData.append("value", this.form.value);
      this.$store.dispatch("submitHistory", formData);
    },
    previewFiles(event) {
      this.form.image = event.target.files[0];
    },
  },
  created() {
    this.fetchBalance();
  },
};
</script>

<style></style>
