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
    });;
  }
}
