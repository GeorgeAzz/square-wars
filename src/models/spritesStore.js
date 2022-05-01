class SpritesStore {
  constructor() {
    this.bullets = [];
    this.enemies = [];
  }

  update(animationId) {
    this.bullets.forEach((b) => b.updatePosition());
    this.enemies.forEach((enemy) => {
      enemy.updatePosition();
      enemy.catchPLayer();

      if (enemy.isPlayerWasCatched) {
        clearInterval(intervalId);
        cancelAnimationFrame(animationId);
      }
    });
  }

  cleanup() {
    this.removeSpritesFromOutside("bullets");
    this.removeSpritesFromOutside("enemies");
    this.removeDiedEnemy();
  }

  addBullet(bullet) {
    this.bullets.push(bullet);
  }

  removeSpritesFromOutside(sprites) {
    this[sprites] = this[sprites].filter((sprite) => {
      return (
        sprite.position.x < canvas.width &&
        sprite.position.y < canvas.height &&
        sprite.position.x + sprite.size.width > 0 &&
        sprite.position.y + sprite.size.height > 0
      );
    });
  }

  addEnemy(enemy) {
    this.enemies.push(enemy);
  }

  removeDiedEnemy() {
    if (!this.bullets.length) return;

    this.enemies = this.enemies.filter((enemy) => {
      return this.bullets.every((bullet, index) => {
        const bulletPosX = bullet.position.x + bullet.size.width / 2;
        const bulletPosY = bullet.position.y + bullet.size.height / 2;

        const detectBulletInX =
          enemy.position.x + enemy.size.width > bulletPosX &&
          bulletPosX > enemy.position.x;

        const detectBulletInY =
          enemy.position.y + enemy.size.height > bulletPosY &&
          bulletPosY > enemy.position.y;

        if (detectBulletInX && detectBulletInY) {
          this.bullets.splice(index, 1);
        }

        return !detectBulletInX || !detectBulletInY;
      });
    });
  }
}
