"use strict";

class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
    this.pattern = this.lowerAndSortWord(word);
  }

  match(potentialAnagrams) {
    let anagrams = [];

    for (let index = 0; index < potentialAnagrams.length; index += 1) {
      if (this.word === potentialAnagrams[index].toLowerCase()) continue;

      let currentWord = this.lowerAndSortWord(potentialAnagrams[index]);
      if (currentWord === this.pattern) {
        anagrams.push(potentialAnagrams[index]);
      }
    }

    return anagrams;
  }

  lowerAndSortWord(word) {
    return word.toLowerCase().split('').sort().join();
  }
}

module.exports = Anagram;