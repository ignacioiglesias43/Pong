let bgSoundFile;
let hitSoundFile;
let gameFont;
let bg;
let ball;
let pts;
let players = [];

function preload() {
  soundFormats("wav");
  bgSoundFile = loadSound("src/assets/sfx/musicloop.wav");
  hitSoundFile = loadSound("src/assets/sfx/kick.wav");
  gameFont = loadFont("src/assets/fonts/kenvector_future_thin.ttf");
}

function setup() {
  bg = loadImage("src/assets/sprites/board.png");
  players.push(
    new Paddle(
      PaddleFactory.coords(0, BOARD_SPECS.height / 2 - PADDLE_SPECS.height / 2),
      PaddleFactory.controllSettings(87, 83),
      PLAYERS_ID.player1
    )
  );
  players.push(
    new Paddle(
      PaddleFactory.coords(
        BOARD_SPECS.width - PADDLE_SPECS.width,
        BOARD_SPECS.height / 2 - PADDLE_SPECS.height / 2
      ),
      PaddleFactory.controllSettings(38, 40),
      PLAYERS_ID.player2
    )
  );
  pts = new Points(PointsFactory.coords(BOARD_SPECS.width / 2, 70), gameFont);
  ball = new Ball(
    BallFactory.coords(
      (BOARD_SPECS.width - BALL_SPECS.width) / 2,
      (BOARD_SPECS.height - BALL_SPECS.height) / 2
    ),
    hitSoundFile,
    players,
    pts
  );
  bgSoundFile.loop();
  createCanvas(BOARD_SPECS.width, BOARD_SPECS.height);
}

function draw() {
  background(bg);
  ball.draw();
  pts.draw();
  players.forEach((p) => p.draw());
}
