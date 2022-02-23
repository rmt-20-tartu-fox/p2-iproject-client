<template>
  <div class="col-2 mt-2 d-flex justify-content-around">
    <div class="card" style="width: 13rem">
      <img class="card-img-top" :src="card.CardImageUrl" alt="Card image cap" />
      <div class="card-body">
        <button
          @click.prevent="removeFromDeck(card.id)"
          type="button"
          class="button btn-danger"
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
