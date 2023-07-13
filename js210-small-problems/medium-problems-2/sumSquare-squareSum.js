function sumSquareDifference(n) {
  let posInts = [];
  let count = 1;
  while (count <= n) {
    posInts.push(count);
    count += 1;
  }

  let sumSquare = (posInts.reduce((sum, int) => sum + int)) ** 2;
  let squareSum = posInts.reduce((sum, int) => sum + (int ** 2));
  return sumSquare - squareSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150