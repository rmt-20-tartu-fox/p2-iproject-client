<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Balance Name</th>
          <th scope="col">Type</th>
          <th scope="col">Value</th>
          <th scope="col">Date</th>
          <th scope="col">Attachment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in histories.result" v-bind:key="history.id">
          <th scope="row">{{ history.Balance.title }}</th>
          <td>{{ history.Balance.type }}</td>
          <td>{{ history.value }}</td>
          <td>{{ new Date(history.createdAt) }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              v-on:click="handleImage(history.attachment)"
            >
              See Attachment
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Attachment</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img v-bind:src="image" alt="" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryList",
  data() {
    return {
      image: "",
    };
  },
  computed: {
    histories() {
      return this.$store.state.histories;
    },
  },
  methods: {
    async fetchHistory() {
      await this.$store.dispatch("fetchHistory");
    },
    handleImage(e) {
      this.image = e;
    },
  },
  created() {
    this.fetchHistory();
  },
};
</script>

<style></style>
