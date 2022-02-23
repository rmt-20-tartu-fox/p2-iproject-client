<template>
  <div class="home">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-6/12 md:w-4/12 px-4">
        <div class="relative inline-flex align-middle w-full">
          <button
            class="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 ease-linear transition-all duration-150 font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 capitalize w-full"
            type="button"
            v-on:click="toggleDropdown()"
            ref="btnDropdownRef"
          >
            White Dropdown
          </button>
          <div
            v-bind:class="{
              hidden: !dropdownPopoverShow,
              block: dropdownPopoverShow,
            }"
            class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
            style="min-width: 12rem"
            ref="popoverDropdownRef"
          >
            <a
              href="#pablo"
              class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
              Action
            </a>
            <a
              href="#pablo"
              class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
              Another action
            </a>
            <a
              href="#pablo"
              class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
              Something else here
            </a>
            <div
              class="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25"
            ></div>
            <a
              href="#pablo"
              class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
              Seprated link
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Maps from "../components/googleMaps/Maps.vue";
import { createPopper } from "@popperjs/core";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    // Maps,
  },
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function () {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
