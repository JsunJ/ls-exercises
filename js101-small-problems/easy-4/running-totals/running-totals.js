// Write a function that takes an array of numbers and returns an array with the
// same number of elements, but with each element's value being the running
// total from the original array.

// P
// input: an array of numbers
// output: an array with the same number of elements
//         the output array element values are a running total from the original array

// E
// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// D
// input: array
// output: array

// A
// 1. define a function named "runningTotal" with one parameter "arr".
// 2. declare a variable "resultArr" initialized to an empty array.
// 3. declare a variable "currentTotal" to hold the running total
// 4. loop through the elements of `arr`.
//    1. add the current element to `currentTotal`
//    2. push the `currentTotal` to `resultArr`.
// 5. return `resultArr`.

function runningTotal(arr) {
  let resultArr = [];
  let currentTotal = 0;

  for (let i = 0; i < arr.length; i += 1) {
    currentTotal += arr[i];
    resultArr.push(currentTotal);
  }

  return resultArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []