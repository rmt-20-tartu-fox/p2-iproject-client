<template>
  <section id="chat" class="chat">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3 align-self-center">
          <h2 class="text-center fw-bold subtitle">Chat</h2>
        </div>
        <div class="row justify-content-evenly p-3 mx-5">
          <div class="col-lg-3">
            <div class="bg-white p-3 rounded-lg">
              <h4>Isi Chat</h4>
            </div>
          </div>
          <!-- Card -->
          <profile-card></profile-card>
          <!-- Card -->
        </div>
      </div>
    </div>
  </section>
  <!-- Section -->
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue";
export default {
  name: "Chat",
  components: {
    ProfileCard,
  },
};
</script>

<style></style>
