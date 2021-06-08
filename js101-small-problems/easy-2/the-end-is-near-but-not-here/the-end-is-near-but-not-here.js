// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.



// ### Understand the Problem
// - Input : string (sentence)
// - Output : next to last word in the input
// - Explicit Requirements :
// 	- input string will always contain at least two words
// - Implicit Requirements :
// 	- ...
// - Other Rules :
// 	- ...

// ### Examples / Test Cases
// ```
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true
// ```

// ### Data Structure
// - Input : string
// - Output : string
// - Other :
// 	- ...

// ### Algorithm
// 1. define a function named "penultimate" with one parameter "string".
// 2. inside the function, declare a variable "splitString"
// 3. split `string` into an array of words and assign this array to `splitString`.
// 4. access and return the second to last element in `splitString`.

function penultimate(string) {
  let splitString = [];

  splitString = string.split(' ');

  return splitString[splitString.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true