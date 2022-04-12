class Sprite {
  constructor(postion, motion, size, color, hasGravity = false) {
    this.position = postion;
    this.color = color;
    this.size = size;
    this.motion = motion;
    this.gravity = 0.7;
    this.hasGravity = hasGravity;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height,
    );
  }

  update(cantBeOutsideField) {
    this.draw();

    this.position.y += this.motion.y;

    if (
      cantBeOutsideField &&
      (this.position.x + this.size.width + this.motion.x > canvas.width ||
        this.position.x + this.motion.x < 0)
    ) {
      this.motion.x = 0;
    } else {
      this.position.x += this.motion.x;
    }

    if (!this.hasGravity) return;

    if (this.position.y + this.size.height + this.motion.y >= canvas.height) {
      // if palyer touch the "ground" - stop
      this.motion.y = 0;
    } else {
      this.motion.y += this.gravity; // acceleration while falling
    }
  }
}
