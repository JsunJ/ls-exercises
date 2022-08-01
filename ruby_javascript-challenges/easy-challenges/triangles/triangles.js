"use strict";

class Triangle {
  constructor(side1, side2, side3) {
    this._validateSelf(...arguments);
    this.sides = [...arguments];
  }

  kind() {
    if (this.isEquilateral()) return 'equilateral';
    if (this.isIsosceles()) return 'isosceles';
    if (this.isScalene()) return 'scalene';
  }

  isEquilateral() {
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2]) {
      return true;
    }
    return false;
  }

  isIsosceles() {
    if (!this.isEquilateral() && !this.isScalene()) {
      return true;
    }
    return false;
  }

  isScalene() {
    if (this.sides[0] !== this.sides[1] && 
        this.sides[0] !== this.sides[2] &&
        this.sides[1] !== this.sides[2]) {
      return true;
    }
    return false;
  }

  _validateSelf(side1, side2, side3) {
    let sides = [...arguments];
    let test1 = (sides[0] + sides[1]) > sides[2];
    let test2 = (sides[1] + sides[2]) > sides[0];
    let test3 = (sides[2] + sides[0]) > sides[1];

    sides.forEach(side => {
      if (side <= 0) {
        throw new TypeError('all triangle sides must be > 0');
      }
    });

    [test1, test2, test3].forEach(test => {
      if (test === false) {
        throw new TypeError('sides do not form a valid triangle');
      }
    });
  }
}

module.exports = Triangle;