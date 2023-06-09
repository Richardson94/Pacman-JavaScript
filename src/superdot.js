export class superDot {
  constructor(posX, posY) {
      this.positionX = posX;
      this.positionY = posY;
      this.notEaten = true;
      this.icon = '\u2B24';
  }

  getPositionX() {
      return this.positionX;
  }

  getIconWithColor() {
      return this.colorize(this.icon, this.genRandom());
  }

  getPositionY() {
      return this.positionY;
  }

  getnotEaten() {
      return this.notEaten;
  }

  setPosition(posX, posY) {
      this.positionX = posX;
      this.positionY = posY;
  }

  eaten(positionX, positionY) {
      if (positionX == this.positionX && positionY == this.positionY) {
          return true;
      } else {
          return false;
      }
  }

  genRandom() {
      return Math.floor(Math.random() * 7);
  }

  colorize(output, color) {
      if (color == 0) {
          return ['\x1b[', 91, 'm', output, '\x1b[', 39, 'm'].join('');
      }
      if (color == 1) {
          return ['\x1b[', 92, 'm', output, '\x1b[', 39, 'm'].join('');
      }
      if (color == 2) {
          return ['\x1b[', 93, 'm', output, '\x1b[', 39, 'm'].join('');
      }
      if (color == 3) {
          return ['\x1b[', 94, 'm', output, '\x1b[', 39, 'm'].join('');
      }
      if (color == 4) {
          return ['\x1b[', 95, 'm', output, '\x1b[', 39, 'm'].join('');
      }
      if (color == 5) {
          return ['\x1b[', 96, 'm', output, '\x1b[', 39, 'm'].join('');
      }
      if (color == 6) {
          return ['\x1b[', 97, 'm', output, '\x1b[', 39, 'm'].join('');
      }
  }

  setIcon(posX, posY, arrText) {
      let res = arrText;
      if (this.getPositionX() == posX && this.getPositionY() == posY  && this.getnotEaten() == true) {
          res = '';
          res += ' ' + this.getIconWithColor() + ' ';
      }
      if (this.getPositionY() == posY && this.getPositionX() == posX && this.getnotEaten() == false) {
          res = '';
          res += '   ';
      }
      return res;
  }
}