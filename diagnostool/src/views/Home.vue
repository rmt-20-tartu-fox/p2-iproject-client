<template>
  <section id="home">
    <div id="heading">
      <h1 class="mb-4">
        We Are Providing Best Diagnostic Tool to Determine Your Disease
      </h1>
      <p>
        Our symptom checker algorithm can detect more than 700 hundreds disease
        to serve the needs of our user
      </p>
      <button @click="diagnoseHandler" class="btn btn-lg btn-primary">
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
  flex-grow: 1;
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
  width: 30%;
  background-color: #2d31fa !important;
}

#image {
  width: 50%;
}

#image img {
  width: 100%;
}

@media only screen and (max-width: 600px) {
  #home {
    display: block;
    padding: 24px;
  }

  #heading {
    display: block;
    width: 100%;
    text-align: center !important;
  }

  #heading h1,
  #heading p {
    text-align: center;
  }

  #heading button {
    width: 240px;
  }

  #image {
    width: 300px !important;
    text-align: center;
    margin: 0 auto;
  }

  #image img {
    width: 300px !important;
  }
}

@media only screen and (max-width: 768px) {
  #home {
    padding: 56px;
  }

  #heading h1 {
    font-size: 48px;
  }

  #heading {
    justify-content: flex-start;
  }

  #heading button {
    width: 240px;
  }
}
</style>
