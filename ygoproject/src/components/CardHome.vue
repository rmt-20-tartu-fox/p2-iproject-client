<template>
  <div class="col-2 mt-5 d-flex">
    <div class="card" style="width: 13rem">
      <img class="card-img-top" :src="card.CardImageUrl" alt="Card image cap" />
      <div class="p-1">
        <button
          @click.prevent="removeFromDeck(card.id)"
          type="button"
          class="button btn-danger btn-block"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardHome",
    props: ["card"],
    methods: {
      fetchMyDeck() {
        this.$store.dispatch("fetchMyDeck");
      },
      removeFromDeck(id) {
        this.$store
          .dispatch("removeFromDeck", id)
          .then(() => {
            this.fetchMyDeck();
          })
          .catch((err) => {
            console.error(err);
          });
      },
    },
  };
</script>

<style></style>
