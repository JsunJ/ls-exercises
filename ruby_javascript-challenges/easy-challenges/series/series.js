"use strict";

class Series {
  constructor(string) {
    this.digitArray = string.split('').map(str => Number(str));
  }

  slices(specifiedLength) {
    if (specifiedLength > this.digitArray.length) {
      throw new Error('Specified length longer than digit string!');
    }

    let slices = [];

    for (let start = 0; start < this.digitArray.length; start += 1) {
      if (this.digitArray.slice(start, start + specifiedLength).length === specifiedLength) {
        slices.push(this.digitArray.slice(start, start + specifiedLength));
      }
    }

    return slices;
  }
}

module.exports = Series;