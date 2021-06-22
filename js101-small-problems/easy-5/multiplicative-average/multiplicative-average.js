// Write a function that takes an array of integers as input, multiplies all of
// the integers together, divides the result by the number of entries in the
// array, and returns the result as a string with the value rounded to three
// decimal places.


// P
// input: an array of integers
// output: a string representing the multiplicative average of the input integers
// explicit reqs: output must be rounded to 3 decimal places
// implicit reqs:

// E
// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// D
// input: array
// output: string

// A
// 1. define a function named "multiplicativeAverage" with one parameter "arr"
// 2. declare a variable "result" initialized to 1.
// 3. loop through the integers in `arr`.
//    1. multiply `result` by the current integer.
// 4. divide `result` by the length of `arr`.
// 5. convert `result` to its float representation to 3 decimal places converted to a string.
// 6. return `result`.

// C
function multiplicativeAverage(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  result /= arr.length;
  return result.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

// function average(arr) {
//   return (arr.reduce((a, b) => a *= b) / arr.length).toFixed(3);
// }