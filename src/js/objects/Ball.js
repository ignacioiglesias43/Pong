class Ball {
  constructor(coords, sound, players = []) {
    //   Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //   Anchura y altura
    this.width = BALL_SPECS.width;
    this.height = BALL_SPECS.height;
    //   Imagen
    this.img = loadImage("src/assets/sprites/ball.png");
    // Sonido
    this.sound = sound;
    // Numero aleatorio para escoger polaridad
    this.random = Math.floor(Math.random() * 2) + 1;
    //   Velocidad
    this.speedX = this.random == 1 ? 5 : -5;
    this.speedY = this.random == 1 ? 5 : -5;
    // Paddles Stack Ref
    this.players = players;
    // Hitbox
    this.hb = new HitboxSquare(
      HitBoxFactory.coords(this.x + 19, this.y + 19),
      HitBoxFactory.squareDims(29, 29)
    );
  }

  move() {
    // Hit del escenario
    if (
      this.x < 0 ||
      this.x >= BOARD_SPECS.width - this.width ||
      this.players.some((p) => p.hb.wasHitSquare(this.hb))
    ) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y >= BOARD_SPECS.height - this.height) {
      this.speedY *= -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
    this.hb.x += this.speedX;
    this.hb.y += this.speedY;
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.move();
  }
}

const BallFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
