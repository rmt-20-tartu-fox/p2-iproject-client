<template>
  <div>
    <div class="container-sm w-25">
      <div class="bg-light left">
        <div class="mt-3 text-center p-2">
          <p>Filter Cards</p>
        </div>

        <form @submit.prevent="fetchFilter" class="p-2">
          <input
            v-model="name"
            class="form-control my-2"
            type="text"
            placeholder="search card name"
            aria-label="Search"
          />
          <input
            v-model="desc"
            class="form-control my-2"
            type="text"
            placeholder="search card decsription/effect"
            aria-label="Search"
          />
          <select v-model="type" class="browser-default custom-select my-2">
            <option selected value="">select type of card</option>
            <option value="Spell Card">Spell Card</option>
            <option value="Trap Card">Trap Card"</option>
            <option value="Normal Monster">Normal Monster</option>
            <option value="Skill Card">Skill Card</option>
          </select>
          <div>
            <button type="submit" class="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row p-2 mt-2">
      <CardHome v-for="card in cards" :key="card.id" :card="card"></CardHome>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="fill"
    ></b-pagination>
  </div>
</template>

<script>
  import CardHome from "../components/tes";

  export default {
    name: "Home",
    data() {
      return {
        name: "",
        desc: "",
        type: "",
        currentPage: 1,
      };
    },
    components: { CardHome },
    computed: {
      cards() {
        return this.$store.state.cards;
      },
      rows() {
        return this.$store.state.rows;
      },
      perPage() {
        return this.$store.state.perPage;
      },
    },
    methods: {
      fetchCards() {
        this.$store.dispatch("fetchCards", {});
      },
      fetchFilter() {
        this.$store.dispatch("fetchCards", {
          name: this.name,
          desc: this.desc,
          type: this.type,
        });
      },
    },
    created() {
      this.fetchCards();
      if (localStorage.access_token) {
        this.$store.commit("setIsLogin", true);
      }
    },
    watch: {
      currentPage: function (val) {
        if (val) {
          this.$store.commit("setCurrentpage", this.currentPage);
          this.$store.dispatch("fetchCards", {
            name: this.name,
            desc: this.desc,
            type: this.type,
          });
        }
      },
    },
  };
</script>
