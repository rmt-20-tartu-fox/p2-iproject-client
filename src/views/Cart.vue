<template>
  <div class="flex justify-between min-h-screen min-w-screen">
    <div class="w-1/2 bg-gray-100">
      <div
        class="bg-gray-100 flex flex-col block items-center justify-center rounded p-5"
      >
        <BookCard :book="dataBook"></BookCard>
        <!-- <div class="w-2/3 bg-blue-100 h-40 mb-5 mt-12"></div> -->
        <input type="number" v-model="quantity" />
      </div>
    </div>
    <div class="w-1/2 bg-white flex items-center justify-center">
      <div>
        <form
          action=""
          class="bg-gray-100 flex flex-col block items-center justify-center rounded p-5"
          @submit.prevent="payment"
        >
          <label for="" class="mb-5">First Name</label>
          <input
            type="text"
            v-model="user.first_name"
            class="mb-4 w-3/4 rounded border-gray-400 border"
          />
          <label for="" class="mb-5">Last Name</label>
          <input
            type="text"
            v-model="user.last_name"
            class="mb-4 w-3/4 rounded border-gray-400 border"
          />
          <label for="" class="mb-5">No. Telepon </label>
          <input
            type="text"
            class="mb-4 w-3/4 rounded border-gray-400 border"
          />
          <!-- <label for="" class="mb-5">Address</label>
          <textarea name="" class="mb-5" cols="30" rows="10"></textarea> -->
          <input
            type="submit"
            value="Submit"
            class="bg-blue-100 rounded w-3/4 mt-4 py-1"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: `Cart`,
  data() {
    return {
      quantity: "",
      user: {
        first_name: "",
        last_name: "",
      },
    };
  },
  components: {
    BookCard,
  },
  created() {
    this.fetchDetailMovie();
    this.$store.commit("SET_PAGE", "Cart");
  },
  // mounted() {
  //   const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
  //   const myMidtransClientKey = "SB-Mid-client-mO1eRTUNvkoVhRzZ";
  //   let scriptTag = document.createElement("script");
  //   scriptTag.src = midtransScriptUrl;
  //   scriptTag.setAttribute("data-client-key", myMidtransClientKey);
  // },
  methods: {
    fetchDetailMovie() {
      this.$store.dispatch("detailBook", { id: this.$route.params.id });
    },
    async payment() {
      await this.$store.dispatch("payment", {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        price: this.dataBook.price,
        quantity: this.quantity,
        itemName: this.dataBook.title,
      });
      if (this.dataToken) {
        const ctx = this;
        window.snap.pay(this.dataToken, {
          onSuccess: function (result) {
            ctx.$store
              .dispatch("createTransaction", {
                BookId: ctx.dataBook.id,
                order_id: result.order_id,
                transaction_status: "Completed",
              })
              .then(() => {
                if (this.dataPage == "Home") {
                  ctx.$router.push({ name: `Home` });
                }
              });
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            // alert("wating your payment!");
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            // alert("payment failed!");
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert("you closed the popup without finishing the payment");
          },
        });
      }
    },
  },
  computed: {
    dataBook() {
      return this.$store.state.book;
    },
    dataPage() {
      return this.$store.state.page;
    },
    dataToken() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
