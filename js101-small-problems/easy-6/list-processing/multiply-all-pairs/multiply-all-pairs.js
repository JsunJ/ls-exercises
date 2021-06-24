// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.
// You may assume that neither argument will be an empty array.

// P
// input: two arrays, each containing a list of numbers
// output: a new array containing the products of all combinations of number
//         pairs between the two input arrays
// explicit reqs: the output array should be sorted in ascending numerical order
// implicit reqs:

// E
// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// D
// input: array
// output: new array

// A
// 1. define a function named "multiplyAllPairs" with two parameters "arr1" and "arr2".
// 2. declare a "resultArr" variable initialized to an empty array.
// 3. loop through the numbers of the `arr1`.
//    1. loop through the elements of `arr2`.
//       1. multiply the current `arr1` number and the current `arr2` number
//       2. push this result to `resultArr`.
// 4. numerically sort the numbers in `resultArr` and return `resultArr`.

// C
function multiplyAllPairs(arr1, arr2) {
  let resultArr = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    for (let jdx = 0; jdx < arr2.length; jdx++) {
      let product = arr1[idx] * arr2[jdx];
      resultArr.push(product);
    }
  }
  return resultArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16])