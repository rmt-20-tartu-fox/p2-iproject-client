<template>
  <figure class="image-block col">
    <h1>{{ city.name }}</h1>
    <img :src="city.imgUrl" alt="" />
    <figcaption>
      <h3>{{ city.name }}</h3>
      <p v-text="city.description">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </p>
      <button @click="getHotel">Search Destination</button>
    </figcaption>
  </figure>
</template>

<script>
import localhost from "../../API/axios.js";
export default {
  name: "CityCard",
  props: ["city"],
  methods: {
    getHotel() {
      this.$store
        .dispatch("getHotel", {
          longitude: this.city.long,
          latitude: this.city.lat,
        })
        .then((resp) => {
          this.$store.commit("SET_HOTELATCITY", resp.data.result);

          return localhost.post("weathers", {
            longitude: this.city.long,
            latitude: this.city.lat,
          });
        })
        .then((resp) => {
          this.$store.commit("SET_WEATHER", resp.data);
          this.$router.push('/hotel')
        })
        .catch((err) => console.log(err.response.message));
    },
  },
};
</script>

<style scoped>
figure {
  position: relative;
  display: flex;

  justify-content: flex-start;
  width: 375px;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}
figure:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
figure:hover img {
  transform: scale(1.25);
}
figure:hover figcaption {
  bottom: 0;
  
}
figure h1 {
  position: absolute;
  top: 50px;
  left: 20px;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 60px;
  font-weight: 100;
  line-height: 1;
}
figure img {
  height: 100%;
  transition: 0.25s;
}
figure figcaption {
  position: absolute;
  bottom: -33%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  color: white;
  line-height: 1;
  transition: 0.25s;
}
figure figcaption h3 {
  margin: 0 0 20px;
  padding: 0;
}
figure figcaption p {
  font-size: 14px;
  line-height: 1.75;
}
figure figcaption button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0;
  padding: 10px 30px;
  background-color: #1abc9c;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
}

/* Card */
/* * {
	 margin: 0;
	 padding: 0;
	 box-sizing: border-box;
}
 body {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 min-height: 100vh;
	 background: #353540;
}
 .l-container {
	 display: grid;
	 grid-template-columns: repeat(4, 1fr);
	 width: 100%;
	 max-width: 1200px;
	 padding: 30px;
}
 @media screen and (max-width: 760px) {
	 .l-container {
		 grid-template-columns: repeat(2, 1fr);
	}
}
 .b-game-card {
	 position: relative;
	 z-index: 1;
	 width: 100%;
	 padding-bottom: 150%;
	 perspective: 1000px;
}
 .b-game-card__cover {
	 position: absolute;
	 z-index: 1;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 100%;
	 overflow: hidden;
	 background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
	 background-size: cover;
	 perspective-origin: 50% 50%;
	 transform-style: preserve-3d;
	 transform-origin: top center;
	 will-change: transform;
	 transform: skewX(0.001deg);
	 transition: transform 0.35s ease-in-out;
}
 .b-game-card__cover::after {
	 display: block;
	 content: '';
	 position: absolute;
	 z-index: 100;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 120%;
	 background: linear-gradient(226deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 35%, rgba(255, 255, 255, 0.2) 42%, rgba(255, 255, 255, 0) 60%);
	 transform: translateY(-20%);
	 will-change: transform;
	 transition: transform 0.65s cubic-bezier(0.18, 0.9, 0.58, 1);
}
 .b-game-card:hover .b-game-card__cover {
	 transform: rotateX(7deg) translateY(-6px);
}
 .b-game-card:hover .b-game-card__cover::after {
	 transform: translateY(0%);
}
 .b-game-card::before {
	 display: block;
	 content: '';
	 position: absolute;
	 top: 5%;
	 left: 5%;
	 width: 90%;
	 height: 90%;
	 background: rgba(0, 0, 0, 0.5);
	 box-shadow: 0 6px 12px 12px rgba(0, 0, 0, 0.4);
	 will-change: opacity;
	 transform-origin: top center;
	 transform: skewX(0.001deg);
	 transition: transform 0.35s ease-in-out, opacity 0.5s ease-in-out;
}
 .b-game-card:hover::before {
	 opacity: 0.6;
	 transform: rotateX(7deg) translateY(-6px) scale(1.05);
}
  */
</style>