// Write a function that combines two arrays passed as arguments, and returns a
// new array that contains all elements from both array arguments, with each
// element taken in alternation.

// P
// input: two arrays
// output: new array that contains all elements from the input in alternation
// explicit reqs: both input arrays are non-empty, and have the same # of elems
// implicit reqs:

// E
// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// D
// input: array
// output: array

// A
// 1. define a function named "interleave" with two parameters "arr1" and "arr2".
// 2. map the elements of `arr1` to a new array "combinedArr".
//    1. in each callback function, return the current element followed by the
//       element of `arr2` at the same index as the current element.
// 3. return `combinedArr`.

// C
function interleave(arr1, arr2) {
  return arr1.flatMap((elem, index) => [elem, arr2[index]]);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]