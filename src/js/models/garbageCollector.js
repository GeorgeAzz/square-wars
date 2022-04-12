class GarbageCollector {
  removeBulletsFromOutside() {
    bullets = bullets.filter((bullet) => {
      return (
        bullet.position.x < canvas.width &&
        bullet.position.y < canvas.height &&
        bullet.position.x + bullet.size.width > 0 &&
        bullet.position.y + bullet.size.height > 0
      );
    });
  }
}
