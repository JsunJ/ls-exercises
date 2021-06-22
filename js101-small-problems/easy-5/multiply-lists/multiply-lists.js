// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

// P
// input: two arrays containing a list of numbers
// output: a new array containing the product of each pair of numbers from the
//         inputs with the same index
// explicit reqs: the input arrays have the same number of elements
// implicit reqs:

// E
// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// D
// input: array
// output: array

// A
// 1. define a function named "multiplyList" with two parameters "arr1" and
//    "arr2".
// 2. map `arr1` values to a new array, multiplying the current value by the
//    corresponding value at the same index in `arr2` on each callback execution

// C
function multiplyList(arr1, arr2) {
  return arr1.map((num, index) => num * arr2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]