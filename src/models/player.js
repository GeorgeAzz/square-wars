class Character extends Sprite {
  constructor(position, motion, size, color, hasGravity) {
    super(position, motion, size, color, hasGravity);
  }

  shoot({ clientY, clientX }) {
    const width = getRandomNumber(5, 20);
    const height = getRandomNumber(5, 20);

    const angle = Math.atan2(
      clientY - (player.position.y + player.size.height / 2 - 5),
      clientX - (player.position.x + player.size.width / 2 - 5),
    );

    const motion = { x: Math.cos(angle) * 10, y: Math.sin(angle) * 10 };

    spritesStore.addBullet(
      new Bullet(
        {
          x: player.position.x + player.size.width / 2 - 5,
          y: player.position.y + player.size.height / 2 - 5,
        },
        motion,
        { width, height },
        getRandomColor(),
      ),
    );
  }
}
