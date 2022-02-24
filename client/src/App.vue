<template>
  <div>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/birthPage"></router-link> -->
    <!-- <router-link to="/login">Login</router-link> -->

    <canvas id="canvas1"></canvas>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      frameX: 0,
      gameFrame: 0,
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
      let frameY = this.animationSet; // computed
      let gameFrame = this.gameFrame;
      const staggerFrames = 7;

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
      if (gameFrame % staggerFrames == 0) {
        if (frameX < 6) this.frameX++;
        else this.frameX = 0;
      }
      this.gameFrame++;

      requestAnimationFrame(this.animate);
    },
  },
  mounted() {
    this.animate();
  },
  computed: {
    animationSet() {
      return this.$store.state.animationSet;
    },
  },
};
</script>

<style>
#app {
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
  border: 5px;
  position: absolute;
  top: 78%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
}
</style>
