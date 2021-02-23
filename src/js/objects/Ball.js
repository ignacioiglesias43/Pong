class Ball {
  constructor(coords) {
    //   Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //   Anchura y altura
    this.width = BALL_SPECS.width;
    this.height = BALL_SPECS.height;
    //   Imagen
    this.img = loadImage("src/assets/sprites/ball.png");
    // Numero aleatorio para escoger polaridad
    this.random = Math.floor(Math.random() * 2) + 1;
    //   Velocidad
    this.speedX = this.random == 1 ? 5 : -5;
    this.speedY = this.random == 1 ? 5 : -5;
    // Paddles Stack Ref
    this.players = [];
  }

  move() {
    if (this.x < 0 || this.x >= BOARD_SPECS.width - this.width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y >= BOARD_SPECS.height - this.height) {
      this.speedY *= -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }

  collision() {
    this.players.forEach((p) => {
      if (
        this.x < p.x + p.width &&
        this.x + this.width > p.x &&
        this.y < p.y + p.height &&
        this.height + this.y > p.y
      ) {
        this.speedX *= -1;
      }
    });
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.move();
    this.collision();
  }
}

const BallFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
