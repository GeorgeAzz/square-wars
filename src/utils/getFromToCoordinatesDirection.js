const getFromToCoordinatesDirection = (x, y) => {
  const angle = Math.atan2(y, x);

  return { x: Math.cos(angle), y: Math.sin(angle) };
};
