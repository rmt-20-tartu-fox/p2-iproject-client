<template>
  <div class="h-screen drawer w-full">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col drawer-content">
      <!-- Navbar -->
      <div class="w-full navbar backdrop-filter backdrop-blur-lg opacity-60">
        <div class="flex-none">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">PiBuYo</div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <button @click="logout" class="mx-11 btn btn-primary">
              Logout
            </button>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <div class="p-4 overflow-y-auto menu w-80 bg-base-300">
        <div>
          <p class="mb-5 text-3xl font-bold">{{ petName.name }}</p>
          <div class="badge badge-outline">Hunger</div>
          <div class="mt-50">
            <progress
              :value="hunger"
              class="mt-15 progress progress-primary w-56"
              max="100"
            ></progress>
            <form
              class="flex gap-2"
              @submit.prevent="submit"
              enctype="multipart/form-data"
            >
              <label class="btn" for="file-upload"> Send </label>
              <input @change="upload" id="file-upload" type="file" />

              <button class="btn">Feed</button>
            </form>
          </div>
          <!-- SVG 1 - ASK THE CRAVINGS -->
          <div class="flex flex-row mt-5">
            <a @click.prevent="askCravings" href="#">
              <img
                title="Ask the cravings"
                src="../assets/ask-the-dog.svg"
                width="50"
              />
            </a>
            <a class="ml-3 mt-1" @click.prevent="roll" href="#">
              <img title="Do rolling" src="../assets/roll.svg" width="40" />
            </a>
            <a class="ml-5 mt-1" @click.prevent="stand" href="#">
              <img title="Stand" src="../assets/stand.svg" width="40" />
            </a>
            <a class="ml-3 mt-1" @click.prevent="bite" href="#">
              <img title="Bite" src="../assets/bite.svg" width="40" />
            </a>
          </div>
          <!-- SVG 2 - ASK THE CRAVINGS -->
          <ShareNetwork
            class="mt-20"
            network="twitter"
            url="http://localhost:8080/"
            title="Hi! This game is so cool just like the creator!"
            hashtags="BestGameEver"
          >
            Share on Twitter
          </ShareNetwork>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "SideAndNavigationBar",
  data() {
    return {
      image: "",
    };
  },
  methods: {
    upload(file) {
      this.image = file.target.files[0];
    },
    async submit() {
      try {
        const formData = new FormData();
        formData.append("file", this.image);
        const labelsData = await this.$store.dispatch("upload", formData);

        const data = await this.$store.dispatch("feedPet", labelsData);

        Swal.fire({
          imageUrl:
            "https://i.pinimg.com/564x/b2/aa/d7/b2aad7ffe838427d5d25ebc142ab426a.jpg",
          imageWidth: 150,
          imageHeight: 150,
          title: data.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error.response);
        Swal.fire({
          imageUrl:
            "https://i.pinimg.com/564x/e0/a1/a9/e0a1a91d254d569506d1eb03f6a3ff31.jpg",
          imageWidth: 150,
          imageHeight: 150,
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
    askCravings() {
      Swal.fire({
        imageUrl:
          "https://e7.pngegg.com/pngimages/475/296/png-clipart-steak-drawing-fish-meat-food-tuna-steak-white-text.png",
        imageWidth: 500,
        imageHeight: 300,
        showConfirmButton: false,
        timer: 1500,
      });
    },
    roll() {
      const payload = { set: 6 };
      this.$store.dispatch("changeAnimation", payload);
    },
    stand() {
      const payload = { set: 1 };
      this.$store.dispatch("changeAnimation", payload);
    },
    bite() {
      const payload = { set: 7 };
      this.$store.dispatch("changeAnimation", payload);
    },
  },
  computed: {
    hunger() {
      return this.$store.state.petsData?.hunger;
    },
    petName() {
      return this.$store.state.petsData;
    },
  },
};
</script>

<style>
input[type="file"] {
  display: none;
}
</style>
