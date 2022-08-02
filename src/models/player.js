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

  // holdGun() {
  //   this.gun.gunDraw();

  //   this.gun.position.x = this.position.x + this.size.width / 2 - 5;
  //   this.gun.position.y = this.position.y + this.size.height / 2 - 5;
  // }

  // aim({ clientY, clientX }) {
  //   const dx = clientX - this.gun.position.x;
  //   const dy = clientY - this.gun.position.y;
  //   this.gun.angle = Math.atan2(dy, dx);
  // }

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
