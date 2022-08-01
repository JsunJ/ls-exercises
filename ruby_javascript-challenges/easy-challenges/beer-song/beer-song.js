"use strict";

class BeerSong {
  static verse(num) {
    if (!(num < 100) && !(num >= 0)) return 'Bottles must be between 99 and 0!';

    return BeerSong.determineVerse(num);
  }

  static verses(first, second) {
    if (!(first < 100) && !(first >= 0) && !(second < 100) && !(second >= 0)) {
      return 'Bottles must be between 99 and 0!';
    }
    if (second > first) return 'Second number must be less than first number!';

    let result = '';

    for (let bottle = first; bottle >= second; bottle -= 1) {
      result += BeerSong.determineVerse(bottle);
      if (bottle !== second) {
        result += '\n';
      } else {
        continue;
      }
    }

    return result;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }

  static determineVerse(num) {
    switch(num) {
      case 0:
        return `No more bottles of beer on the wall, no more bottles of beer.\n` +
                `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
      case 1:
        return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
                `Take it down and pass it around, no more bottles of beer on the wall.\n`;
      case 2:
        return `2 bottles of beer on the wall, 2 bottles of beer.\n` +
                `Take one down and pass it around, 1 bottle of beer on the wall.\n`;
      default:
        return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
                `Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n`;
    }
  }
}

module.exports = BeerSong;