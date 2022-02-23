<template>
  <section id="result">
    <h1>Based on your data, you might have this disease:</h1>
    <div class="card">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Issue Name</th>
            <th scope="col">Diagnostic accuracy</th>
            <th scope="col">International clasification of Disease code</th>
            <th scope="col">Specialization</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="res in result" v-bind:key="res.Issue.ID">
            <td>{{ res.Issue.ID }}</td>
            <td>{{ res.Issue.Name }}</td>
            <td>{{ res.Issue.Accuracy }} percent</td>
            <td>{{ res.Issue.Icd }}</td>
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
  flex-grow: 1;
}
#result > h1 {
  text-align: center;
}
</style>
