class Player extends Sprite {
  constructor(position, motion, size, color, hasGravity) {
    super(position, motion, size, color, hasGravity);
  }

  shoot({ clientY, clientX }) {
    const angle = Math.atan2(
      clientY - player.position.y,
      clientX - player.position.x,
    );

    const motion = { x: Math.cos(angle), y: Math.sin(angle) };

    bullets.push(
      new Bullet(
        {
          x: player.position.x,
          y: player.position.y,
        },
        motion,
        { width: 10, height: 10 },
        "white",
      ),
    );
  }
}
