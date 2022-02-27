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
    <section id="doc-detail" class="card">
      <h3 class="mt-3">Dokter: {{ user }}</h3>
      <div id="doc-detail__stat">
        <status class="status mb-3">Aktif</status>
        <button @click="logoutHandler" class="btn btn-danger mb-3">
          Logout
        </button>
      </div>
      <div class="doc-img mt-3">
        <img src="../assets/doctor.jpg" alt="doc-img" />
      </div>
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
  padding: 32px 16px 16px 16px;
  height: 700px;
  margin-top: 50px;
}

#doctor .window {
  width: 500px !important;
  height: 600px;
}

.wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
}

#doc-detail {
  margin: auto 50px !important;
  width: 500px;
  height: 500px;
}

#doc-detail button {
  width: 100px;
  margin: 0;
}

#doc-detail .status {
  padding: 8px;
  width: 100px;
  margin: 0;
  background-color: #2ecc71;
  border-radius: 32px;
}

#doc-detail__stat {
  display: flex;
  justify-content: space-around;
  width: 240px;
  margin: 0 auto;
}

.doc-img img {
  width: 400px;
  border-radius: 8px;
}

@media only screen and (max-width: 600px) {
  .features__container {
    width: 10px !important;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  #doctor {
    margin-top: 4px;
    padding: 0 !important;
  }

  #doctor .window {
    width: 420px !important;
    height: 300px !important;
  }

  #doc-detail.card {
    width: 400px;
    height: 360px;
  }

  #doc-detail.card {
    margin: 0 !important;
  }

  .doc-img img {
    width: 300px;
    border-radius: 8px;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  #doctor {
    height: 40vh;
    margin-top: 10px;
  }

  #doctor .window {
    width: 500px !important;
    height: 360px;
  }

  #doc-detail {
    width: 600px;
    height: 400px;
  }

  #doc-detail.card {
    margin: 0 !important;
  }

  .doc-img img {
    width: 300px;
    border-radius: 8px;
  }
}
</style>