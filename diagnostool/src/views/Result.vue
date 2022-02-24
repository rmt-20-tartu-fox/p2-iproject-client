<template>
  <section id="result" class="mb-3">
    <h1>Based on your data, you might have these disease:</h1>
    <div class="wrapper">
      <table class="table table-sm table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Issue Name</th>
            <th scope="col">Diagnostic accuracy</th>
            <th scope="col">International Clasification of Disease Code</th>
            <th scope="col">Specialization</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="res in result" v-bind:key="res.Issue.ID" :res="res">
            <td>{{ res.Issue.ID }}</td>
            <td>{{ res.Issue.Name }}</td>
            <td>{{ res.Issue.Accuracy }}% (percent)</td>
            <td>
              <span
                class="badge badge-pill badge-info mx-1"
                v-for="c in res.Issue.Icd.split(';')"
                v-bind:key="c"
                >{{ c }}</span
              >
            </td>
            <td>{{ res.Specialisation.map((el) => el.Name).join(", ") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "Result",
  computed: {
    result() {
      return this.$store.state.diagnoseResult;
    },
    specialization() {
      let specialization = [];
      this.result.forEach((el) => {
        el.Specialisation.forEach((spec) => {
          specialization.push(spec.Name);
        });
      });
      return specialization;
    },
  },
};
</script>

<style>
#result {
  display: flex;
  flex-direction: column !important;
  flex-grow: 1;
}
#result > h1 {
  text-align: center;
}

.wrapper {
  width: 85%;
  margin: 0 auto;
}
</style>
