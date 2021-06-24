// Write a function that takes one argument, a positive integer, and returns the
// sum of its digits. Do this without using for, while, or do...while loops -
// instead, use a series of method calls to perform the sum.

// P
// input: a positive integer
// output: the sum of the digits in the input
// explicit reqs: do not use a for, while, or do...while loop
//                use a series of method calls to perform the sum
// implicit reqs:

// E
// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

// D
// input: number (integer)
// output: number

// A
// 1. define a function named "sum" with one parameter "integer".
// 2. declare variable "result" initialized to:
//    1. `integer` converted to a string
//    2. above value split by character
//    3. above value's character's numeric conversions added together
//       1. loop through the characters and add each conversion to `result`.
// 3. return `result`

// C
function sum(integer) {
  let result = integer.toString().split('').reduce((acc, char) => {
    return acc + Number.parseInt(char, 10);
  }, 0);
  return result;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45