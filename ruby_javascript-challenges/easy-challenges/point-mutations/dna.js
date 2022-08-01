"use strict";

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparisonStrand) {
    let count = 0;
    let comparisonLength = this.determineShortestLength(this.strand, comparisonStrand);

    for (let index = 0; index < comparisonLength; index += 1) {
      if (this.strand[index] !== comparisonStrand[index]) {
        count += 1;
      }
    }

    return count;
  }

  determineShortestLength(strand1, strand2) {
    if (strand1.length > strand2.length) {
      return strand2.length;
    } else {
      return strand1.length;
    }
  }
}

module.exports = DNA;