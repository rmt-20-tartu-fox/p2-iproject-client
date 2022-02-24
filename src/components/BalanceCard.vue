<template>
  <div>
    <GChart
      type="LineChart"
      :data="chartData"
      :options="chartOptions"
      v-if="balance.Histories.length > 0"
    />
    <strong class="m-3" v-if="balance.Histories.length > 0">{{
      balance.title
    }}</strong>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: [],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
    };
  },
  props: ["balance"],
  computed: {
    rateUsd() {
      return this.$store.state.rateUsd;
    },
    rateEur() {
      return this.$store.state.rateEur;
    },
    rateBtc() {
      return this.$store.state.rateBtc;
    },
    rateEth() {
      return this.$store.state.rateEth;
    },
  },
  methods: {
    async updateData() {
      let balance = this.balance;
      let temp = [];
      temp.push([
        { type: "date", label: "year" },
        { type: "number", label: "cashflow" },
        { type: "number", label: "balance" },
      ]);
      let balanceVal = 0;
      if (balance.Histories.length > 0) {
        balance.Histories.forEach((el) => {
          console.log(balance.type);
          if (balance.type === "IDR") {
            console.log(57);
            let arr = [];
            balanceVal += Number(el.value);
            arr.push(new Date(el.createdAt));
            arr.push(Number(el.value));
            arr.push(Number(balanceVal));
            temp.push(arr);
          } else if (balance.type === "USD") {
            let arr = [];
            balanceVal += Number(el.value * this.rateUsd);
            arr.push(new Date(el.createdAt));
            arr.push(Number(el.value * this.rateUsd));
            arr.push(Number(balanceVal));
            temp.push(arr);
          } else if (balance.type === "EUR") {
            let arr = [];
            balanceVal += Number(el.value * this.rateEur);
            arr.push(new Date(el.createdAt));
            arr.push(Number(el.value * this.rateEur));
            arr.push(Number(balanceVal));
            temp.push(arr);
          } else if (balance.type === "ETH") {
            let arr = [];
            balanceVal += Number(el.value * this.rateEth);
            arr.push(new Date(el.createdAt));
            arr.push(Number(el.value * this.rateEth));
            arr.push(Number(balanceVal));
            temp.push(arr);
          } else if (balance.type === "BTC") {
            let arr = [];
            balanceVal += Number(el.value * this.rateBtc);
            arr.push(new Date(el.createdAt));
            arr.push(Number(el.value * this.rateBtc));
            arr.push(Number(balanceVal));
            temp.push(arr);
          }
        });
        this.chartData = temp;
      }
    },
  },
  async created() {
    if (!this.rateUsd || !this.rateEur) {
      await this.$store.dispatch("getUsd");
    }
    if (!this.rateBtc || !this.rateEth) {
      await this.$store.dispatch("getBtc");
    }
    await this.updateData();
  },
};
</script>

<style></style>
