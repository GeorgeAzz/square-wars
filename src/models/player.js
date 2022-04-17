class Player extends Sprite {
  constructor(position, motion, size, color, hasGravity) {
    super(position, motion, size, color, hasGravity);
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
        { x: x * 10, y: y * 10 },
        { width, height },
        getRandomColor(),
      ),
    );
  }
}
