class Player extends Sprite {
  constructor(position, motion, size, color, hasGravity) {
    super(position, motion, size, color, hasGravity);
    this.gun = new Gun(
      {
        x: this.position.x,
        y: this.position.y,
      },
      { x: 0, y: 0 },
      { width: 75, height: 10 },
      "green",
    );
  }

  holdGun() {
    this.gun.updatePosition();
    this.gun.position.x = this.position.x + this.size.width / 2 - 5;
    this.gun.position.y = this.position.y + this.size.height / 2 - 5;
  }

  shoot({ clientY, clientX }) {
    const width = getRandomNumber(5, 20);
    const height = getRandomNumber(5, 20);

    const playerCenterX = this.position.x + this.size.width / 2 - 5;
    const playerCenterY = this.position.y + this.size.height / 2 - 5;

    const { x, y } = getFromToCoordinatesDirection(
      clientX - playerCenterX,
      clientY - playerCenterY,
    );

    spritesStore.addBullet(
      new Bullet(
        {
          x: playerCenterX,
          y: playerCenterY,
        },
        { x: x * 13, y: y * 13 },
        { width, height },
        getRandomColor(),
      ),
    );
  }
}
