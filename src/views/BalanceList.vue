<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Balance Name</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="el in balances" v-bind:key="el.id">
          <th scope="row">{{ el.title }}</th>
          <td>{{ el.type }}</td>

          <td></td>
        </tr>
      </tbody>
    </table>
    <BalanceCard
      v-for="balance in balances"
      v-bind:key="balance.id"
      v-bind:balance="balance"
    ></BalanceCard>
  </div>
</template>

<script>
import BalanceCard from "../components/BalanceCard.vue";
export default {
  components: { BalanceCard },
  name: "BalanceList",
  computed: {
    balances() {
      return this.$store.state.balances;
    },
  },
  async created() {
    await this.$store.dispatch("fetchBalance");
  },
};
</script>

<style></style>
