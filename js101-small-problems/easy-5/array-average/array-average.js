// Write a function that takes one argument, an array of integers, and returns
// the average of all the integers in the array, rounded down to the integer
// component of the average. The array will never be empty, and the numbers will
// always be positive integers.

// P
// input: array of integers
// output: the rounded down average of all integers in the input
// explicit reqs: input will never be empty
//                input will always have positive integers
// implicit reqs:

// E
// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40

// D
// input: array
// output: number

// A
// 1. define a function named "average" with one parameter "arr".
// 2. declare a variable "sum" initialized to 0.
// 3. loop through the numbers in `arr`.
//    1. add the current element to `sum`.
// 4. divide `sum` by the length of `arr`.
// 5. return `sum` floored.

// C
// function average(arr) {
//   let sum = 0;
//   arr.forEach(num => sum += num);
//   return Math.floor(sum / arr.length);
// }

function average(arr) {
  return Math.floor(arr.reduce((acc, num) => acc + num) / arr.length);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40