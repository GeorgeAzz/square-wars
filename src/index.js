const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const spritesStore = new SpritesStore();

const CANT_BE_OUTSIDE_FIELD = true;

run();

const player = new Player(
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

let intervalId;

(function animation() {
  const animationId = requestAnimationFrame(animation);

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height); // update canvas before draw other elements
  player.updatePosition(CANT_BE_OUTSIDE_FIELD);
  player.holdGun();

  spritesStore.update(animationId);
  spritesStore.cleanup();

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

window.addEventListener("click", player.shoot.bind(player));
window.addEventListener("mousemove", player.aim.bind(player));

intervalId = setInterval(() => {
  const enemyPosX = getRandomNumber(canvas.width + 20, 0);
  const enemyPosY = getRandomNumber(0, -20);

  const { x: directionX, y: directionY } = getFromToCoordinatesDirection(
    player.position.x - enemyPosX,
    player.position.y - enemyPosY,
  );

  spritesStore.addEnemy(
    new Enemy(
      {
        x: enemyPosX,
        y: enemyPosY,
      },
      { x: directionX * 5, y: directionY * 5 },
      {
        width: getRandomNumber(25, 70),
        height: getRandomNumber(25, 70),
      },
      getRandomColor(),
    ),
  );
}, 1500);

document
  .getElementById("stop")
  .addEventListener("click", () => clearInterval(intervalId));
