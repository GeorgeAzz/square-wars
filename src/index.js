const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const spritesStore = new SpritesStore();

const CANT_BE_OUTSIDE_FIELD = true;

run();

const player = new Character(
  { x: 70, y: 10 },
  { x: 0, y: 0 },
  { width: 50, height: 50 },
  "red",
  true,
);

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
  ctx.fillRect(0, 0, canvas.width, canvas.height); // update canvas before draw other elements

  player.updatePosition(CANT_BE_OUTSIDE_FIELD);
  spritesStore.bullets.forEach((b) => b.updatePosition());
  spritesStore.enemies.forEach((e) => e.updatePosition());

  spritesStore.removeBulletsFromOutside();

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

window.addEventListener("click", player.shoot);

const intervalId = setInterval(() => {
  spritesStore.addEnemy(
    new Character(
      {
        x: getRandomNumber(20, canvas.width),
        y: getRandomNumber(20, canvas.height),
      },
      { x: 0, y: 0 },
      { width: 50, height: 50 },
      "red",
      true,
    ),
  );
}, 2000);

document
  .getElementById("stop")
  .addEventListener("click", () => clearInterval(intervalId));
