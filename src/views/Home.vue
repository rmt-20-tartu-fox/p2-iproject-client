<template>
  <div>
    <!-- Carousel -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100 cropped"
            :src="getCarousel.imgUrl"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 v-text="getCarousel.title">SUNSET AT CIWIDEY</h1>
            <p v-text="getCarousel.description">BANDUNG DESTINATION HOLIDAY</p>
          </div>
        </div>

        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            v-for="page in pageCarousel"
            :key="page"
            :class="[page == currentPageCarousel ? 'active' : 'deactive']"
            @click.prevent="changeCarousel(page)"
          ></li>
        </ol>
      </div>
    </div>
    <!-- end Carousel -->
    <div
      class="container-xl d-flex flex-col w-100"
      style="margin: 0 auto; position: relative"
    >
      <div></div>
      <div
        class="container d-flex flex-col"
        style="background-color: black; height: max-content; width: 100%"
      >
        <!-- card -->
        <div class="pt-3">
          <city-card
            v-for="city in fetchCity"
            :key="city.id"
            :city="city"
            class="d-flex flex-row"
          >
          </city-card>
        </div>

        <!-- end card -->
      </div>
      <!-- chatbox -->
      <div id="chatApp">
        <div class="chatBox" id="chatBox">
          <div class="card">
            <header class="card-header header-title">
              <p class="card-header-title">
                <i class="fa fa-circle is-online"></i
                ><img
                  src="https://k0.okccdn.com/php/load_okc_image.php/images/32x0/971x939/0/10846088441021659030.webp?v=2"
                  style="width: 30px"
                />&nbsp; <b>Username nanti</b>
              </p>
              <a class="card-header-icon">
                <span class="icon">
                  <i class="fa fa-close"></i>
                </span>
              </a>
            </header>

            <div id="chatbox-area">
              <div class="card-content chat-content">
                <div class="content">
                  <!-- from others -->
                  <div
                    :class="[
                      chat.username == currentUser
                        ? 'chat-message-group writer-user'
                        : 'chat-message-group',
                    ]"
                    v-for="(chat, i) in chatBoxs"
                    :key="chat.username + i"
                    style="padding: 10px"
                  >
                    <div class="chat-messages">
                      <div class="from">
                        <strong
                          ><b>{{ chat.username }} </b></strong
                        >
                      </div>
                      <div class="message">{{ chat.chat }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer" id="chatBox-textbox">
                <div style="width: 100%">
                  <textarea
                    id="chatTextarea"
                    class="chat-textarea"
                    placeholder="Text Here"
                    v-model="currentChats"
                    @keyup.enter="sendMessage"
                  ></textarea>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <!-- end chatbox -->
    </div>
  </div>
</template>

<script>
import CityCard from "../components/CityCard.vue";
export default {
  name: "Home",
  components: {
    CityCard,
  },
  data() {
    return {
      active: false,
      username: "",
      currentChats: "",
      chatBox: true,
      button: false,
    };
  },
  created() {
    this.$store.dispatch("costumEventToServer", {
      message: "This from Client.",
    });
    this.$store.dispatch("getCarousel");
    this.$store.dispatch("getHotel");
    this.$store.dispatch("getCity");
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
    chatBoxs() {
      return this.$store.state.chats;
    },
    getCarousel() {
      return this.$store.state.cities;
    },
    pageCarousel() {
      return this.$store.state.total_page_carousel;
    },
    currentPageCarousel() {
      return this.$store.state.page_carousel;
    },
    fetchCity() {
      return this.$store.state.citiesForSearch;
    },
  },
  methods: {
    carousel() {
      this.active = true;
    },
    setUsername() {
      localStorage.setItem("username", this.username);
      this.$store.dispatch("setCurrentUser", this.username);
    },
    sendMessage() {
      this.$store.dispatch("sendMessage", this.currentChats);
      this.currentChats = "";
    },
    changeCarousel(page) {
      this.$store.dispatch("getCarousel", page);
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: 900;
  text-shadow: 3rem;
}

p {
  font-weight: 400;
}

.cropped {
  object-fit: cover;
  object-position: 50% 40%;
  height: 80vh;
}

/* CHATBOX */
.allUsersList {
  width: 300px;
  margin: 20px;
}
.allUsersList .card-header {
  background: #683db8;
  color: #fff;
  padding: 10px;
}
.allUsersList .image img {
  border-radius: 16px;

}
.usersChatList {
  position: fixed;
  width: 250px;
  bottom: 0;
  margin-bottom: 0;
  right: 360px;
}
.show {
  display: block;
}
.thumb-user-list {
  display: none;
}
.thumb-user-list .image img {
  border-radius: 30px;
}
.usersChatList .card-header {
  background: #683db8;
  font-size: 13px;
}
.chatBox {
  position: fixed;
  bottom: 2%;
  right: 0;
  width: 300px;
  margin: 40px;
  margin-bottom: 0;
  font-size: 13px;
}
.chat-content {
  overflow: auto;
  height: 300px;
}
.chatBox .card {
  border-radius: 4px;
}
.chatBox .card-header {
  background: #683db8;
}
.header-title {
  height: 50px;
}
.card-header-title i {
  font-size: 10px;
  color: #32e4cd;
  margin-right: 6px;
}
.card-header .card-header-title {
  color: #fff;
}
.chat-content small {
  margin: 0;
}
.chat-content p {
  background: #ecf1f8;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 0;
}
.my-content .media-content {
  width: 80%;
}
.my-content .message {
  float: right;
  background: #683db8;
  color: #fff;
  text-align: right;
  padding: 10px;
  margin-bottom: 4px;
  font-size: 13px;
}
.my-content .chat-content small {
  float: right;
}
.my-content small {
  display: block;
  float: right;
  width: 100%;
  text-align: right;
}
.chat-textarea {
  font-size: 14px;
  padding: 8px;
  height: 40px;
  width: 100%;
  border: none;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
}
/* .chat-message-group {
} */
.chat-message-group .chat-thumb {
  float: left;
  width: 20%;
}
.chat-message-group .chat-messages {
  float: left;
  width: 80%;
  margin-bottom: 20px;
}
.chat-message-group .message {
  float: left;
  padding: 10px;
  background: #ecf1f8;
  font-size: 13px;
  border-radius: 5px;
  margin-bottom: 3px;
}
.chat-messages .from {
  float: left;
  display: block;
  width: 100%;
  text-align: left;
  font-size: 11px;
}
.chat-thumb img {
  border-radius: 40px;
}
.writer-user .chat-messages {
  float: right;
  width: 100%;
}
.writer-user .chat-messages .message {
  float: right;
  background: #683db8;
  color: #fff;
}
.writer-user .chat-messages .from {
  float: left;
  display: block;
  width: 100%;
  text-align: right;
}
.chat-message-group .typing {
  float: left;
}
.chatBox .card-header-icon i {
  color: #fff;
  font-size: 13px;
}
/* CSSS */
.outside-box {
  height: 100px;
  background: #f8c;
  width: 200px;
  margin: 20px;
  overflow: auto;
}
.outside-box .content-insider {
  height: 300px;
  background: #c9c;
}
/* CSS Spinner */
.spinner {
  margin: 0 30px;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 4px;
  height: 4px;
  background-color: #888;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
/* EmojiBox */
.emojiBox {
  width: 150px;
  margin: 30px;
}
.emojiBox .box {
  height: 100px;
  padding: 4px;
}
/* */
.card-header-title img {
  border-radius: 40px;
}
</style>