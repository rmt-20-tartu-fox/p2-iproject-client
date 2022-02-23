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
          <div class="mb-3">
            <label for="course" class="form-label">Balance</label>
            <select
              class="form-select"
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
        </div>
        <div class="input-group mb-3">
          <label for="value" class="form-label">Value</label>
          <div class="input-group">
            <span class="input-group-text" id="value-label">Rp</span>
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
        <div class="input-group mb-3" v-if="this.crypto">
          <label for="value" class="form-label">Value Cryto</label>
          <div class="input-group">
            <span class="input-group-text" id="value-label"></span>
            <input
              type="text"
              class="form-control"
              placeholder="0.00"
              id="value"
              aria-describedby="value-label"
              v-model="form.valueCrypto"
              disabled
            />
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
  },
  methods: {
    fetchBalance() {
      this.$store.dispatch("fetchBalance");
    },
    onChange() {
      let temp = this.balances.find((e) => e.id === this.form.balance);

      this.crypto = temp.crypto;
    },
    submiHistory() {
      let formData = new FormData();
      formData.append("image", this.form.image);
      formData.append("BalanceId", this.form.balance);
      formData.append("value", this.form.value);
      this.$store.dispatch("submiHistory", formData);
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
