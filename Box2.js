class Boxx {
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.5,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("polygon.png")


    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(2.5)
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    imageMode(CENTER)
    image(this.image, 0,0, 40, 40)
    pop();
  }
};