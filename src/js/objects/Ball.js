class Ball {
  constructor(coords, sound, players = [], points) {
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
    this.hb = new HitBox(
      HitBoxFactory.coords(this.x + BALL_SPECS.hb, this.y + BALL_SPECS.hb),
      HitBoxFactory.squareDims(29, 29)
    );
    // Puntos
    this.points = points;
  }

  move() {
    this.players.forEach((p) => {
      if (p.pointHb.wasHitSquare(this.hb)) {
        this.points.playrPointPlusPlus(p.playerId);
        this.reset();
      }
    });

    if (this.players.some((p) => p.hb.wasHitSquare(this.hb))) {
      this.sound.play();
      this.sound.setVolume(0.15);
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

  reset() {
    this.x = BOARD_SPECS.width / 2 - BALL_SPECS.width / 2;
    this.y = BOARD_SPECS.height / 2 - BALL_SPECS.width / 2;

    this.hb.x = this.x + BALL_SPECS.hb;
    this.hb.y = this.y + BALL_SPECS.hb;

    this.speedY = this.speedY > 0 ? 5 : -5;
    this.speedX = this.speedX > 0 ? 5 : -5;

    this.players.forEach((player) => {
      player.y = BOARD_SPECS.height / 2 - PADDLE_SPECS.height / 2;
      player.hb.y = BOARD_SPECS.height / 2 - PADDLE_SPECS.height / 2;
    });
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
