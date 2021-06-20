// Write a function that takes an array as an argument and returns an array that
// contains two elements, each of which is an array. Put the first half of the
// original array elements in the first element of the return value, and put the
// second half in the second element. If the original array contains an odd
// number of elements, place the middle element in the first half array.

// P
// input: an array of numbers
// output: an array consisting of 2 subarrays
// explicit reqs: the first subarray of the output contains the first half of
//                the input's elements
//                the second subarray of the output contains the second half of
//                the input's elements
//                if the input has an odd number of elements, the middle element
//                goes in the first subarray
// implicit reqs: 

// E
// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

// D
// input: array
// output: array with 2 subarrays

// A
// 1. define a function named "halvsies" with one parameter "arr".
// 2. declare a variable "resultArr" initialized to an empty array.
// 3. determine if `arr` length is odd or even
//    1. if odd, slice `arr` from beginning to half + 1 and push this value to `resultArr`.
//    2. slice `arr` from half to end and push this value to `resultArr`.
//    1. if even, slice `arr` from beginning to half and push this value to `resultArr`.
//    2. slice `arr` from half to end and push this value to `resultArr`.
// 4. return `resultArr`.

// C
function halvsies (arr) {
  let resultArr = [];
  if (arr.length % 2 === 1) {
    resultArr.push(arr.slice(0, arr.length / 2 + 1),
                   arr.slice(arr.length / 2 + 1));
  } else {
    resultArr.push(arr.slice(0, arr.length / 2),
                   arr.slice(arr.length / 2));
  }
  return resultArr;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]