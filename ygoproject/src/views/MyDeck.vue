<template>
  <div class="container bg-light">
    <div class="d-flex justify-content-between">
      <h2 class="text-left mt-5">My Deck</h2>
      <img class="mt-2" :src="this.$store.state.qrCode" alt="" />
    </div>
    <div class="row">
      <DeckCard v-for="card in cardDeck" :key="card.id" :card="card"></DeckCard>
    </div>
  </div>
</template>

<script>
  import DeckCard from "../components/CardHome.vue";
  export default {
    name: "Deck",
    components: {
      DeckCard,
    },
    computed: {
      cardDeck() {
        return this.$store.state.myDeck;
      },
    },
    methods: {
      fetchMyDeck() {
        this.$store.dispatch("fetchMyDeck");
      },
    },
    created() {
      this.fetchMyDeck();
    },
  };
</script>

<style></style>
