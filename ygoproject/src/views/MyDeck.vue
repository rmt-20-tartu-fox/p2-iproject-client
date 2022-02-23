<template>
  <div class="container">
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
