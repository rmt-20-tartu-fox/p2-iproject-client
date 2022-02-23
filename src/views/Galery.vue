<template>
  <section class="container pt-5">
    <div class="row mt-5">
      <form @submit.prevent="setTitle(); getBookByTitle()" class="col">
        <input v-model="title" class="form-control mr-sm-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>  
      </form>
      <div>
        <button @click="startRecognition" class="btn btn-outline-danger" type="submit">Start</button>
      </div>
    </div>
    <div class="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 mt-3">
        <!-- Start Recent Work -->
        <div v-for="book in booksSearch" :key="book.cover_edition_key" class="col-xl-3 col-md-4 col-sm-6">
            <div class="card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                <img class="card-img" :src="'https://covers.openlibrary.org/b/id/'+book.cover_i+'.jpg'" height="350" width="100">
                <div class="card-img-overlay d-flex align-items-end justify-content-center p-2">
                    <div class="text-left text-light">
                        <p class="card-text bg-dark">{{book.title}}</p>
                        <span class="btn btn-sm btn-warning b-lg-3 px-lg-6">ADD</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- End Recent Work -->
    </div>
  </section>
</template>

<script>
// import assemblyApi from "../apis/assemblyApi"
export default {
  name: "Galery",
  props: {
    lang: {
      type: String,
      default: 'en-US'
    }
  },
  data(){
    return {
      title: "",
      runtimeTranscription: '',
      transcription: [],
      recognition: null
    }
  },

  created(){
    this.getBookByTitle()
    this.title = ""
  },

  computed: {
    booksSearch(){
      return this.$store.state.booksSearch
    }
  },
  methods: {
    getBookByTitle(){
      this.$store.dispatch("getBookByTitle")
    },

    setTitle(){
      console.log("masuuuuuuuuuuuuuuuuuuk");
      let title = this.title
      this.$store.commit("SET_TITLE", title)
    },

    startRecognition() {
      this.checkApi();
      this.recognition.start();
      
      
      console.log(this.recognition.start());
    },
    stopRecognition() {
      console.log("Stopping");
      this.recognition.stop();
      this.recognition = null;
    },

    checkApi() {
      let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition && "development" !== 'production') {
        throw new Error('Speech Recognition does not exist on this browser. Use Chrome or Firefox');
      }
      if (!SpeechRecognition) {
        console.log("No Speech Recognition");
        return;
      }
      this.recognition = new SpeechRecognition();
      
      this.recognition.lang = this.lang;
      this.recognition.interimResults = true;
      this.recognition.addEventListener('result', event => {
        const text = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('');
        this.title = text;
      });
      this.recognition.addEventListener('end', () => {
        if (this.title !== '') {
          this.$store.commit("SET_TITLE", this.title)
          this.getBookByTitle()
        } else {
          console.log("Nothing Found");
        }
        this.title = '';
      });
      this.recognition.onresult = function(event) {
        var color = event.results[0][0].transcript;
        console.log(color);
      }
    },

    mounted() {
      this.checkApi();
    }
  }
}
</script>

<style>

</style>