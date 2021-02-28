class Paddle {
  constructor(coords, controllSettings) {
    //   Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //   Dimensiones
    this.width = PADDLE_SPECS.width;
    this.height = PADDLE_SPECS.height;
    //   Image
    this.img = loadImage("src/assets/sprites/paddle.png");
    //   Velocidad
    this.speed = 5;
    //   Controles
    this.controllSettings = controllSettings;
    // Hitbox
    this.hb = new HitboxSquare(
      HitBoxFactory.coords(this.x + 9, this.y + 9),
      HitBoxFactory.squareDims(19, 110.5)
    );
  }

  moveUp() {
    if (this.hb.y >= 0) {
      this.y -= this.speed;
      this.hb.y -= this.speed;
    }
  }

  moveDown() {
    if (this.hb.y <= BOARD_SPECS.height - this.hb.height) {
      this.y += this.speed;
      this.hb.y += this.speed;
    }
  }

  move() {
    this.controllSettings.forEach((controll) => {
      if (keyIsDown(controll.key)) this[controll.name]();
    });
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.move();
  }
}

const PaddleFactory = {
  coords: (x, y) => {
    return { x, y };
  },
  controllSettings: (moveUpKey, moveDownKey) => {
    return [
      {
        name: "moveUp",
        key: moveUpKey,
      },
      {
        name: "moveDown",
        key: moveDownKey,
      },
    ];
  },
};
