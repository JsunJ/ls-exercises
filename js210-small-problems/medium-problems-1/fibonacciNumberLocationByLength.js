/*

P: return the index of the first fib number that has n number of digits

input:
- integer >= 2 (representing the number of digits to find the first index of)

output:
- a number (representing the first index of the fib number with the input number of digits)

E:
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

D:

input:
- number (integer) >= 2 (append n to use BigInt type)

output:
- number (index)

A:

- return 1n if the input is 1
- append n to the input to turn it into a BigInt

- initialize a BigInt to 1n named `currentFib`
- initialize a BigInt to 1n named `previousFib`
- create a loop starting from 2n (index)
  - initialize intermediateFib to the currentFib
  - set currentFib = currentFib + previousFib
  - set previousFib = intermediateFib
  - if currentFib length === input, return index + 1

*/

function findFibonacciIndexByLength(length) {
  length = BigInt(length);
  if (length === 1n) return 1n;

  let previousFib = 1n;
  let currentFib = 1n;
  let index = 2n;

  while (index > 1n) {
    let intermediateFib = currentFib;
    currentFib += previousFib;
    previousFib = intermediateFib;
    if (BigInt(currentFib.toString().length) === length) {
      return index + 1n;
    }
    index += 1n;
  }
}

console.log(findFibonacciIndexByLength(1n) === 1n);    // 1
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);