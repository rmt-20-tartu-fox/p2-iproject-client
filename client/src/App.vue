<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/birthPage"></router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <canvas id="canvas1"></canvas>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      frameX: 0,
    };
  },
  methods: {
    animate() {
      const canvas = document.getElementById("canvas1");
      const ctx = canvas.getContext("2d");
      const CANVAS_WIDTH = (canvas.width = 600);
      const CANVAS_HEIGHT = (canvas.height = 600);

      const playerImage = new Image();
      playerImage.src =
        "https://www.frankslaboratory.co.uk/downloads/shadow_dog.png";
      const spriteWidth = 575;
      const spriteHeight = 523;

      let frameX = this.frameX;
      let frameY = 0;

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        frameX * spriteWidth,
        frameY * spriteHeight,
        spriteWidth,
        spriteHeight,
        0,
        0,
        spriteWidth,
        spriteHeight
      );
      if (frameX < 6) this.frameX++;
      else this.frameX = 0;
      requestAnimationFrame(this.animate);
    },
  },
  mounted() {
    this.animate();
  },
};
</script>

<style>
#app {
  background-image: url("./assets/backgroundImage.jpg");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain, cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#canvas1 {
  border: 5px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
}
</style>
