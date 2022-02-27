<template>
  <vueChat
    id="patient"
    :title="'DiagnosTool'"
    :initial-feed="chats"
    :new-message="message"
    :initialAuthorId="id"
    @newOwnMessage="onNewOwnMessage"
  ></vueChat>
</template>

<script>
import moment from "moment";
import vueChat from "basic-vue-chat";
export default {
  name: "Chat",
  data: function () {
    return {
      id: 0,
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
        author: "Patient",
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
#patient .window {
  margin: auto !important;
  width: 500px;
  height: 700px;
}
#patient {
  margin: auto !important;
  padding: 16px;
  display: flex;
  flex-grow: 1;
  height: 800px;
}

@media only screen and (max-width: 600px) {
  #patient .window {
    margin: auto !important;
    width: 410px;
    height: 50vh;
  }

  #patient {
    margin: auto !important;
    padding: 16px;
    display: flex;
    flex-grow: 1;
    height: 600px;
  }

  #patient input {
    width: 200px !important;
  }
  .features__container {
    width: 10px !important;
  }
}

@media only screen and (max-width: 768px) {
  #patient {
    margin: auto !important;
    padding: 16px;
    display: flex;
    flex-grow: 1;
    height: 500px !important;
  }
}
</style>