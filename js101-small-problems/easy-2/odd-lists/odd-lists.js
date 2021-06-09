// Write a function that returns an Array that contains every other element of
// an Array that is passed in as an argument. The values in the returned list
// should be those values that are in the 1st, 3rd, 5th, and so on elements of
// the argument Array.


// ### Understand the Problem
// - Input : array
// - Output : array containing every other element in the input array
// - Explicit Requirements :
// 	- elements in the output should begin with the 1st element of the input
//  - an empty input array should return an empty output array
//  - an input array with only 1 element should return an output array with only that element
// - Implicit Requirements :
// 	- ...
// - Other Rules :
// 	- ...

// ### Examples / Test Cases
// ```
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []
// ```

// ### Data Structure
// - Input : array of 0 or more elements
// - Output : array of 0 or more elements
// - Other :
// 	- ...

// ### Algorithm
// 1. define a function named "oddities" with a single parameter "arr".
// 2. inside the function, declare a variable to hold the new array namned "newArray" initialized to an empty array.
// 3. iterate through `arr` starting at the first element, and skipping one element per iteration
//  1. push the value of the current element to `newArray`
// 4. return `newArray`

function oddities(arr) {
  let newArray = [];

  for (let idx = 0; idx < arr.length; idx += 2) {
    newArray.push(arr[idx]);
  }

  return newArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []