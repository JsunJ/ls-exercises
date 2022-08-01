"use strict";

class SumOfMultiples {
  constructor(...args) {
    this.numberSet = [...arguments];
    if (this.numberSet.length === 0) this.numberSet = [3, 5];
  }

  static to(limit) {
    return new SumOfMultiples().to(limit);
  }

  to(limit) {
    let multiples = this.determineMultiples(limit);
    return multiples.reduce((sum, value) => sum + value, 0);
  }

  determineMultiples(limit) {
    let multiples = [];

    this.numberSet.forEach(num => {
      for (let possibleMultiple = num; possibleMultiple < limit; possibleMultiple += 1) {
        if (possibleMultiple % num === 0) {
          multiples.push(possibleMultiple);
        }
      }
    });

    // remove duplicates
    return multiples.filter((num, index) => {
      return multiples.indexOf(num) === index;
    });
  }
}

module.exports = SumOfMultiples;