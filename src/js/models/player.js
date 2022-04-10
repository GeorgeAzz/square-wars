class Player extends Sprite {
  constructor(position, motion, size, color, hasGravity) {
    super(position, motion, size, color, hasGravity);
  }

  shoot({ clientX, clientY }) {
    const angle = Math.atan2(
      clientY - canvas.height / 2,
      clientX - canvas.width / 2,
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
