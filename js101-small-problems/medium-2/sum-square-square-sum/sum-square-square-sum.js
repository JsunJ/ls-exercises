// Write a function that computes the difference between the square of the sum
// of the first count positive integers and the sum of the squares of the first
// count positive integers.

// P
// input: a *count* representing the first *count* positive integers
//        aka 3, the first 3 positive integers 1, 2 and 3
// output: the difference between:
//         the sum of the first count positive integers squared
//         (1 + 2 + 3)**2
//         the sum of the squares of the first count positive integers
//         (1**2) + (2**2) + (3**2)

// E
// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150

// D
// input: number (count)
// output: number (difference)

// A
// 1. declare an array of the first count positive integers
// 2. declare a sumSquare
// 3. declare a squareSum
// 4. loop through the array
//    1. increment sumSquare by each positive integer
//    2. increment squareSum by each positive integer **2
// 5. return sumSquare **2 minus squareSum

// C
function sumSquareDifference(count) {
  let positiveInts = [];
  let startInt = 0;
  while (positiveInts.length < count) {
    startInt += 1;
    positiveInts.push(startInt);
  }

  let sumSquare = 0;
  let squareSum = 0;

  for (let i = 0; i < positiveInts.length; i++) {
    let currentPosInt = positiveInts[i];
    sumSquare += currentPosInt;
    squareSum += currentPosInt**2;
  }

  return (sumSquare**2) - squareSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150