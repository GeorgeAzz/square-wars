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
      // if palyer touch the "ground"
      this.motion.y = 0;
    } else {
      this.motion.y += gravity; // acceleration while falling
    }
  }
}

const player = new Player({ x: 70, y: 10 });
player.draw();

const keys = {
  d: {
    isPressed: false,
  },
  a: {
    isPressed: false,
  },
  w: {
    isPressed: false,
  },
};

(function animation() {
  requestAnimationFrame(animation);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  player.motion.x = 0;

  if (keys.a.isPressed) {
    player.motion.x = -5;
  }

  if (keys.d.isPressed) {
    player.motion.x = 5;
  }

  if (keys.w.isPressed) {
    player.motion.y = -15;
    keys.w.isPressed = false;
  }
})();

window.addEventListener("keydown", ({ key }) => {
  const k = key.toLowerCase();
  if (k in keys) {
    keys[k].isPressed = true;
  }
});

window.addEventListener("keyup", ({ key }) => {
  const k = key.toLowerCase();
  if (k in keys) {
    keys[k].isPressed = false;
  }
});
