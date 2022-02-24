<template>
  <div class="col-3 mt-2 d-flex justify-content-around">
    <div class="card" style="width: 500px">
      <div class="row no-gutters">
        <div class="col-sm-5">
          <img
            class="card-img"
            :src="card.card_images[0].image_url"
            alt="Suresh Dasari Card"
          />
        </div>
        <div class="col-sm-7">
          <div class="card-body">
            <h5 class="card-title">{{ card.name }}</h5>
            <h6>Description:</h6>
            <hr />
            <p class="overflow-auto">
              {{ card.desc }}
            </p>
            <hr />
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="addToMyDeck(card.id)"
            >
              Add to Deck
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import swal from "sweetalert2";
  export default {
    name: "CardHome",
    props: ["card"],
    methods: {
      addToMyDeck(id) {
        this.$store
          .dispatch("addToMyDeck", id)
          .then(() => {
            swal.fire("succes add card to deck");
          })
          .catch((err) => {
            console.error(err);
          });
      },
    },
  };
</script>

<style></style>
