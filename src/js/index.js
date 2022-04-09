const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;

class Player {
  constructor(postion) {
    this.position = postion;
    this.motion = { x: 0, y: 0 };
    this.width = 50;
    this.height = 50;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.motion.x;
    this.position.y += this.motion.y;

    if (this.position.y + this.height + this.motion.y >= canvas.height) {
      this.motion.y = 0;
    } else {
      this.motion.y += gravity;
    }
  }
}

const player = new Player({ x: 10, y: 10 });
player.draw();

(function animation() {
  requestAnimationFrame(animation);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  player.update();
})();

window.addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "d":
      player.motion.x = 5;
      break;
    case "a":
      player.motion.x = -5;
      break;
    case "w":
      player.motion.y = -10;
      break;
  }
});

window.addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "d":
      player.motion.x = 0;
      break;
    case "a":
      player.motion.x = 0;
      break;
    case "s":
      player.motion.y = 0;
      break;
  }
});
