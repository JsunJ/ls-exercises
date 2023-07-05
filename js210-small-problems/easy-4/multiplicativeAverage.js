function showMultiplicativeAverage(arr) {
  let multiplicativeAvg = arr.reduce((product, elem) => {
    return product * elem;
  }) / arr.length;

  return multiplicativeAvg.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"