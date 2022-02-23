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
      <h3>Dokter: name</h3>
      <status>Aktif</status>
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