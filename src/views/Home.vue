<template>
  <div>
    <!-- Carousel -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item">
          <img
            class="d-block w-100 cropped"
            src="@/assets/images/carousel/bandung-ciwidey.jpg"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>SUNSET AT CIWIDEY</h1>
            <p>BANDUNG DESTINATION HOLIDAY</p>
          </div>
        </div>
        <div class="carousel-item active">
          <img
            class="d-block w-100 cropped"
            src="@/assets/images/carousel/JawaTimur_Malang-JurassicPark.jpg"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>JURASSIC PARK</h1>
            <p>MALANG DESTINATION HOLIDAY</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 cropped"
            src="@/assets/images/carousel/NTT-labuan_bajo.jpg"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>LABUAN BAJO</h1>
            <p>NTT DESTINATION HOLIDAY</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 cropped"
            src="@/assets/images/carousel/bali-kuta.jpg"
            alt="Four slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>KUTA BEACH</h1>
            <p>BALI DESTINATION HOLIDAY</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 cropped"
            src="@/assets/images/carousel/SulUt-Bunaken.jpg"
            alt="Five slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>BUNAKEN</h1>
            <p>MANADO DESTINATION HOLIDAY</p>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <!-- end Carousel -->
    <div class="container-xl d-flex flex-col w-100" style="margin: 0 auto">
      <div
        class="container-fluid d-flex flex-col"
        style="background-color: grey; height: 100vh; width: 30%"
      ></div>
      <div
        class="container d-flex flex-col"
        style="background-color: black; height: 100vh; width: 70%"
      >
      <!-- card -->

      <!-- end card -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      active: false,
    }
  },
 methods: {
    carousel() {
      this.active = true;
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
</style>