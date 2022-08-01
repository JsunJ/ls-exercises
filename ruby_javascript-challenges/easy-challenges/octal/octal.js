"use strict";

class Octal {
  constructor(input) {
    this.input = input;
  }

  toDecimal() {
    if (this.isInvalidInput()) return 0;

    let decimal = 0;
    let power = 0;

    for (let index = this.input.length - 1; index >= 0; index -= 1) {
      decimal += (parseInt(this.input[index])) * (8 ** power);
      power += 1;
    }

    return decimal;
  }

  isInvalidInput() {
    if (this.input.match(/[^0-7]/g) !== null) return true;
    return false;
  }
}

module.exports = Octal;