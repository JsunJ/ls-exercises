"use strict";

class PerfectNumber {
  static classify(number) {
    if (number < 1) throw new Error("Given number is negative!");

    let divisorSum = 0;

    for (let divisor = 1; divisor < number; divisor += 1) {
      if (number % divisor === 0) divisorSum += divisor;
    }

    if (divisorSum === number) {
      return 'perfect';
    } else if (divisorSum > number) {
      return 'abundant';
    } else {
      return 'deficient';
    }
  }
}

module.exports = PerfectNumber;