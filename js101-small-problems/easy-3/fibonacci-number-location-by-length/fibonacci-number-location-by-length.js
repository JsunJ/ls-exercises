// Write a function that calculates and returns the index of the first Fibonacci
// number that has the number of digits specified by the argument.
// (The first Fibonacci number has an index of 1.)

// P
// input: number of digits
// output: the index of the first Fibonacci number with the input number of digits
// explicit: the input is always an integer greater than or equal to 2
//           the input is always a bigint

// E
// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// A
// 1. define a function named "findFibonacciIndexByLength" with one parameter
//    "digits".
// 3. declare a variable "lastFib" initialized to 1n.
// 4. declare a variable "currentFib" initialized to 1n.
// 6. declare a variable "temp" initialized to 0n.
// 5. declare a variable "indexCount" initialized to 2n.
// 6. start a loop that ends when `current` has the specified `digits` (check length)
//    1. reassign `temp` to the value of `currentFib`.
//    2. reassign `currentFib` to the value of `lastFib` + `currentFib`.
//    3. reassign `lastFib` to the value of temp.
//    4. increment `indexCount` by 1n
// 7. return `indexCount`.

// C
function findFibonacciIndexByLength(digits) {
  let temp = 0n;
  let lastFib = 1n;
  let currentFib = 1n;
  let indexCount = 2n;

  while (currentFib.toString().length < Number(digits)) {
    temp = currentFib;
    currentFib += lastFib;
    lastFib = temp;
    indexCount += 1n;
  }

  return indexCount;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);