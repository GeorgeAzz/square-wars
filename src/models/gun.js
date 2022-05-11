class Gun extends Sprite {
  constructor(position, motion, size, color, hasGravity) {
    super(position, motion, size, color, hasGravity);
    this.angle = 0;
  }

  gunDraw() {
    ctx.fillStyle = this.color;
    ctx.save();
    // ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height,
    );
    ctx.restore();
  }
}
