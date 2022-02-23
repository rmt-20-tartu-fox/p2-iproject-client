<template>
  <section id="home">
    <div id="heading">
      <h1>We Are Providing Best Diagnostic Tool to Determine Your Disease</h1>
      <p>
        Our symptom checker algorithm can detect more than 700 hundreds disease
        to serve the needs of our user
      </p>
      <button @click="diagnoseHandler" class="btn btn-primary">
        Get Your Diagnosis
      </button>
    </div>
    <div id="image">
      <img src="../assets/diagnosis2.png" alt="doctor" />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  methods: {
    diagnoseHandler() {
      this.$router.push("/diagnose");
    },
  },
};
</script>
<style>
#home {
  display: flex;
}

#heading {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#heading h1 {
  font-size: 56px;
}

#heading p {
  font-size: 24px;
}

#heading button {
  width: 50%;
}

#image {
  width: 50%;
}

#image img {
  width: 100%;
}
</style>
