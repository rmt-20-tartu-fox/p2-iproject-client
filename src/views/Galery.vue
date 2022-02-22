<template>
    <div class="mt-5">
    </div>
</template>

<script>
// import assemblyApi from "../apis/assemblyApi"
export default {
  name: "Galery",
  methods: {
    getSound(){
      let speechRecognition = window.webkitSpeechRecognition
      let recognition = new speechRecognition()
      recognition.continous = true
      recognition.onstart = ()=> {
        console.log('record on');
      }
    }
  }
}
</script>

<style>

</style>