"use strict";

class RomanNumeral {
  constructor(number) {
    this.myNumber = number;
  }

  static ROMAN_NUMERAL_TABLE = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }

  toRoman() {
    let romanNumeral = '';
    let sortedRomanNumeralTable = Object.entries(RomanNumeral.ROMAN_NUMERAL_TABLE)
                                                .sort((a, b) => b[1] - a[1]);

    sortedRomanNumeralTable.forEach(numberNumeralPair => {
      let numeralValue = numberNumeralPair[1];
      let evenDivideCount = Math.floor(this.myNumber / numeralValue);
      let remainder = this.myNumber % numeralValue;

      if (evenDivideCount > 0) {
        romanNumeral += numberNumeralPair[0].repeat(evenDivideCount);
      }

      this.myNumber = remainder;
    });
    return romanNumeral;
  }
}

module.exports = RomanNumeral;