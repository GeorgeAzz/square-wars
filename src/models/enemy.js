class Enemy extends Sprite {
  constructor(position, motion, size, color, hasGravity) {
    super(position, motion, size, color, hasGravity);

    this.isPlayerWasCatched = false;
  }

  catchPLayer() {
    const playerCenterX = player.position.x + player.size.width / 2;
    const playerCenterY = player.position.y + player.size.height / 2;
    if (
      playerCenterX > this.position.x &&
      playerCenterX < this.position.x + this.size.width &&
      playerCenterY > this.position.y &&
      playerCenterY < this.position.y + this.size.height
    ) {
      this.isPlayerWasCatched = true;
    }
  }
}
