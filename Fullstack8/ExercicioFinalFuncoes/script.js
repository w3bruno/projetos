function slowDown(velocity, printer) {
  let desaceleration = 30;

  while (velocity > 0) {
    printer(velocity);
    velocity -= desaceleration;
  }
  while (velocity < desaceleration) {
    velocity -= velocity;
    printer(velocity);
    break;
  }
  alert("Nave Parada");
}

let spaceshipVelocity = 150;

slowDown(spaceshipVelocity, function (velocity) {
  console.log("Velocidade atual " + velocity);
});
