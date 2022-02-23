<template>
  <div class="wrapper">
    <vueChat
      id="doctor"
      :title="'DiagnosTool'"
      :initial-feed="chats"
      :new-message="message"
      :initialAuthorId="id"
      @newOwnMessage="onNewOwnMessage"
    ></vueChat>
    <section>
      <h3 class="mt-3">Dokter: {{ user }}</h3>
      <status>Aktif</status>
      <button @click="logoutHandler" class="btn btn-secondary ml-4">
        Logout
      </button>
    </section>
  </div>
</template>

<script>
import moment from "moment";
import vueChat from "basic-vue-chat";
export default {
  name: "DoctorChat",
  data: function () {
    return {
      user: localStorage.user,
      id: 1,
      message: {},
    };
  },
  computed: {
    chats() {
      return this.$store.state.chats;
    },
  },
  methods: {
    logoutHandler() {
      localStorage.clear();
      this.$store.commit("setIsLogin", false);
      this.$router.push("/login");
    },
    onNewOwnMessage(message) {
      // console.log(this.chats);
      // console.log(message);
      this.$socket.client.emit("sendMessageToServer", {
        id: this.id,
        author: "Doctor",
        contents: message,
        date: moment().format("HH:mm:ss"),
      });
    },
  },
  components: {
    vueChat,
  },
};
</script>

<style>
#doctor {
  padding: 16px;
  width: 600px !important;
}

.wrapper {
  display: flex;
  justify-content: space-evenly;
}
</style>