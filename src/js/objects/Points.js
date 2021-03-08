class Points {
  constructor(coords, font, sound) {
    //   Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //   Fonts
    this.font = font;
    //   Sound
    this.sound = sound;
    //   Puntajes
    this.p1 = 0;
    this.p2 = 0;
  }

  draw() {
    fill("#ffffff");
    textSize(35);
    textAlign(CENTER);
    textFont(this.font);
    text(`${this.p1} - ${this.p2}`, this.x, this.y);
  }

  playrPointPlusPlus(playerId) {
    this[playerId]++;
    this.sound.play();
    this.sound.setVolume(0.15);
  }
}

const PointsFactory = {
  coords: (x, y) => ({
    x,
    y,
  }),
};
