class SpritesStore {
  constructor() {
    this.bullets = [];
    this.enemies = [];
  }

  addBullet(bullet) {
    this.bullets.push(bullet);
  }

  removeBulletsFromOutside() {
    this.bullets = this.bullets.filter((bullet) => {
      return (
        bullet.position.x < canvas.width &&
        bullet.position.y < canvas.height &&
        bullet.position.x + bullet.size.width > 0 &&
        bullet.position.y + bullet.size.height > 0
      );
    });
  }

  addEnemy(enemy) {
    this.enemies.push(enemy);
  }

  removeDiedEnemy() {
    if (!this.bullets.length) return;

    this.enemies = this.enemies.filter((enemy) => {
      return this.bullets.some((bullet) => {
        console.log(bullet.position.x)
        console.log(enemy.position.x )
        return (
          bullet.position.x === enemy.position.x 
        );
      });
    });
  }
}
