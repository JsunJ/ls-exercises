"use strict";

class Scrabble {
  static TABLE = {
    'aeioulnrst': 1,
    'dg': 2,
    'bcmp': 3,
    'fhvwy': 4,
    'k': 5,
    'jx': 8,
    'qz': 10,
  };

  static score(word) {
    return new Scrabble(word).score();
  }

  constructor(word) {
    if (word) {
      this.word = word;
    } else {
      this.word = '';
    }
  }

  score() {
    let totalScore = 0;
    let letters = this.word.toLowerCase().replace(/[^a-z]/g, '').split('');
    if (letters.length === 0) return totalScore;

    for (let index = 0; index < letters.length; index += 1) {
      Object.keys(Scrabble.TABLE).forEach(key => {
        if (key.includes(letters[index])) {
          totalScore += Scrabble.TABLE[key];
        }
      });
    }

    return totalScore;
  }
}

module.exports = Scrabble;