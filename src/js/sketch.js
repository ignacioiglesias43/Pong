let bgSoundFile;
let hitSoundFile;
let bg;
let ball;
let players = [];

function preload() {
  soundFormats("wav");
  bgSoundFile = loadSound("src/assets/sfx/musicloop.wav");
  hitSoundFile = loadSound("src/assets/sfx/kick.wav");
}

function setup() {
  bg = loadImage("src/assets/sprites/board.png");
  players.push(
    new Paddle(
      PaddleFactory.coords(0, BOARD_SPECS.height / 2 - PADDLE_SPECS.height / 2),
      PaddleFactory.controllSettings(87, 83)
    )
  );
  players.push(
    new Paddle(
      PaddleFactory.coords(
        BOARD_SPECS.width - PADDLE_SPECS.width,
        BOARD_SPECS.height / 2 - PADDLE_SPECS.height / 2
      ),
      PaddleFactory.controllSettings(38, 40)
    )
  );
  ball = new Ball(
    BallFactory.coords(
      (BOARD_SPECS.width - BALL_SPECS.width) / 2,
      (BOARD_SPECS.height - BALL_SPECS.height) / 2
    ),
    hitSoundFile,
    players
  );
  // bgSoundFile.loop();
  createCanvas(BOARD_SPECS.width, BOARD_SPECS.height);
}

function draw() {
  background(bg);
  ball.draw();
  players.forEach((p) => p.draw());
}
