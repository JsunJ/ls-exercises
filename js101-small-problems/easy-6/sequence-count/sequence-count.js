// Create a function that takes two integers as arguments.
// The first argument is a count, and the second is the starting number of a
// sequence that your function will create. The function should return an array
// containing the same number of elements as the count argument. The value of
// each element should be a multiple of the starting number.
// You may assume that the count argument will always be an integer greater
// than or equal to 0. The starting number can be any integer. If the count is
// 0, the function should return an empty array.

// P
// input: 2 integers (a count and a starting number)
// output: an array containing (count) number of elements, with each element
//         being a multiple of the (starting number)
// explicit reqs: the (count) will always be an integer greater than or equal to
//                0.
//                the (starting number) can be any integer.
//                if (count) is 0, output an empty array.
// implicit reqs:

// E
// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []

// D
// input: numbers
// output: array

// A
// 1. define a function named "sequence" with two parameters "count" and "startNum".
// 2. if `count` equals 0, return an empty array.
// 3. declare a new variable initialized to an empty array "sequenceArr".
// 4. declare a new variable "factor" initialized to 1.
// 5. start a loop that ends when `sequenceArr`'s length is equal to `count`.
//    1. push `startNum` * `factor` to `sequenceArr`.
//    2. increment `factor` by 1.
// 6. return `sequenceArr`.

// C
function sequence(count, startNum) {
  let sequenceArr = [];
  let factor = 1;

  if (count === 0) return sequenceArr;

  while (sequenceArr.length < count) {
    sequenceArr.push(startNum * factor);
    factor += 1;
  }

  return sequenceArr;
}

// function sequence(count, startingInt) {
//   return Array(count).fill(startingInt).map((int, i) => int * (i + 1));
// }

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []