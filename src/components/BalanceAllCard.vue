<template>
  <div class="row">
    <div class="card col-lg-4">
      <GChart type="LineChart" :data="chartData1" :options="chartOptions" />
      <div class="card-body">
        <h5 class="card-title">Balance</h5>
      </div>
    </div>
    <div class="card col-lg-4">
      <GChart type="LineChart" :data="chartData2" :options="chartOptions" />
      <div class="card-body">
        <h5 class="card-title">Cashflow and Balance</h5>
      </div>
    </div>
    <div class="card col-lg-4">
      <GChart type="LineChart" :data="chartData3" :options="chartOptions" />
      <div class="card-body">
        <h5 class="card-title">Cashflow</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BalanceAllCard",
  data() {
    return {
      chartData1: [],
      chartData2: [],
      chartData3: [],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
    };
  },
  computed: {
    histories() {
      return this.$store.state.histories;
    },
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
    balanceTotal() {
      return this.$store.state.balanceTotal;
    },
  },
  methods: {
    async checkAll() {
      await this.$store.dispatch("getUsd");
      await this.$store.dispatch("getEur");
      await this.$store.dispatch("getBtc");
      await this.$store.dispatch("getEth");
    },
    async updateData1() {
      let temp = [];
      temp.push([
        { type: "date", label: "year" },
        { type: "number", label: "balance" },
      ]);
      let balance = 0;
      let spending = 0;
      let income = 0;
      this.histories.result.forEach((el) => {
        if (el.Balance.type === "IDR") {
          let arr = [];
          balance += Number(el.value);
          if (Number(el.value) > 0) {
            income += Number(el.value);
          } else {
            spending += Number(el.value);
          }
          arr.push(new Date(el.createdAt));
          arr.push(Number(balance));
          temp.push(arr);
        } else if (el.Balance.type === "USD") {
          let arr = [];
          balance += Number(el.value * this.rateUsd);
          if (Number(el.value) > 0) {
            income += Number(el.value * this.rateUsd);
          } else {
            spending += Number(el.value * this.rateUsd);
          }
          arr.push(new Date(el.createdAt));
          arr.push(Number(balance));
          temp.push(arr);
        } else if (el.Balance.type === "EUR") {
          let arr = [];
          balance += Number(el.value * this.rateEur);
          if (Number(el.value) > 0) {
            income += Number(el.value * this.rateEur);
          } else {
            spending += Number(el.value * this.rateEur);
          }
          arr.push(new Date(el.createdAt));
          arr.push(Number(balance));
          temp.push(arr);
        } else if (el.Balance.type === "ETH") {
          let arr = [];
          balance += Number(el.value * this.rateEth);
          if (Number(el.value) > 0) {
            income += Number(el.value * this.rateEth);
          } else {
            spending += Number(el.value * this.rateEth);
          }
          arr.push(new Date(el.createdAt));
          arr.push(Number(balance));
          temp.push(arr);
        } else if (el.Balance.type === "BTC") {
          let arr = [];
          balance += Number(el.value * this.rateBtc);
          if (Number(el.value) > 0) {
            income += Number(el.value * this.rateBtc);
          } else {
            spending += Number(el.value * this.rateBtc);
          }
          arr.push(new Date(el.createdAt));
          arr.push(Number(balance));
          temp.push(arr);
        }
      });
      console.log(balance);
      this.$store.commit("SET_BALANCETOTAL", balance);
      this.$store.commit("SET_SPENDING", spending);
      this.$store.commit("SET_INCOME", income);
      this.chartData1 = temp;
    },
    async updateData2() {
      let temp = [];
      temp.push([
        { type: "date", label: "year" },
        { type: "number", label: "cashflow" },
        { type: "number", label: "balance" },
      ]);
      let balance = 0;
      this.histories.result.forEach((el) => {
        if (el.Balance.type === "IDR") {
          let arr = [];
          balance += Number(el.value);
          arr.push(new Date(el.createdAt));
          arr.push(Number(el.value));
          arr.push(Number(balance));
          temp.push(arr);
        } else if (el.Balance.type === "USD") {
          let arr = [];
          balance += Number(el.value * this.rateUsd);
          arr.push(new Date(el.createdAt));
          arr.push(Number(el.value * this.rateUsd));
          arr.push(Number(balance));
          temp.push(arr);
        } else if (el.Balance.type === "EUR") {
          let arr = [];
          balance += Number(el.value * this.rateEur);
          arr.push(new Date(el.createdAt));
          arr.push(Number(el.value * this.rateEur));
          arr.push(Number(balance));
          temp.push(arr);
        } else if (el.Balance.type === "ETH") {
          let arr = [];
          balance += Number(el.value * this.rateEth);
          arr.push(new Date(el.createdAt));
          arr.push(Number(el.value * this.rateEth));
          arr.push(Number(balance));
          temp.push(arr);
        } else if (el.Balance.type === "BTC") {
          let arr = [];
          balance += Number(el.value * this.rateBtc);
          arr.push(new Date(el.createdAt));
          arr.push(Number(el.value * this.rateBtc));
          arr.push(Number(balance));
          temp.push(arr);
        }
      });
      this.chartData2 = temp;
    },
    async updateData3() {
      let temp = [];
      temp.push([
        { type: "date", label: "year" },
        { type: "number", label: "cashflow" },
      ]);

      this.histories.result.forEach((el) => {
        if (el.Balance.type === "IDR") {
          let arr = [];
          arr.push(new Date(el.createdAt));
          arr.push(Number(el.value));
          temp.push(arr);
        } else if (el.Balance.type === "USD") {
          let arr = [];
          arr.push(new Date(el.createdAt));
          arr.push(Number(el.value * this.rateUsd));
          temp.push(arr);
        } else if (el.Balance.type === "EUR") {
          let arr = [];
          arr.push(new Date(el.createdAt));
          arr.push(Number(el.value * this.rateEur));
          temp.push(arr);
        } else if (el.Balance.type === "ETH") {
          let arr = [];

          arr.push(new Date(el.createdAt));
          arr.push(Number(el.value * this.rateEth));
          temp.push(arr);
        } else if (el.Balance.type === "BTC") {
          let arr = [];

          arr.push(new Date(el.createdAt));
          arr.push(Number(el.value * this.rateBtc));
          temp.push(arr);
        }
      });
      this.chartData3 = temp;
    },
  },

  async created() {
    await this.checkAll();
    await this.$store.dispatch("fetchHistory");
    await this.updateData1();
    await this.updateData2();
    await this.updateData3();
  },
};
</script>
