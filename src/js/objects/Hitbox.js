class HitBox {
  constructor(coords, dims) {
    this.x = coords.x;
    this.y = coords.y;
    // Square
    this.width = dims.width;
    this.height = dims.height;
    // Circle
    this.diameter = dims.diameter;
  }

  wasHit(hb, type) {
    if (type === "circle") {
      this.wasHitCircle(hb);
    } else {
      this.wasHitSquare(hb);
    }
  }
  // hbs = hitboxsquare
  wasHitSquare(hbs) {
    return (
      hbs.x < this.x + this.width &&
      hbs.x + hbs.width > this.x &&
      hbs.y < this.y + this.height &&
      hbs.y + hbs.height > this.y
    );
  }

  //hbc = hitboxcircle
  wasHitCircle(hbc) {
    return (
      hbc.x < this.x + this.width &&
      hbc.x + hbc.width > this.x &&
      hbc.y < this.y + this.height &&
      hbc.y + hbc.height > this.y
    );
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}

const HitBoxFactory = {
  coords: (x, y) => {
    return { x, y };
  },
  squareDims: (width, height) => {
    return { width, height };
  },
  circleDims: (width, height) => {
    return { width, height };
  },
};
