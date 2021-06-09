// ~problem description~


// Understand the Problem
// - Input : string of digits
// - Output : appropriate integer based on input

// - Explicit Requirements :
// 	- all input characters will be numeric
//  - no standard conversion JavaScript methods

// - Implicit Requirements :
// 	- ...

// - Other Rules :
// 	- ...

// Examples / Test Cases

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true


// Data Structure
// - Input : string
// - Output : number

// - Other :
// 	- ...

// Algorithm
// 1. define a function "stringToInteger" with one parameter "str".
//
//  1. declare a constant array "INTEGERS" of the numbers 0 through 9 to match against.
//  2. declare a variable "arrayOfConvertedChars" to store each converted from string character.
//  3. declare a variable "finalResult" initialized to 0.
//  4. loop through the characters of the argument str.
//    1. for each character, push the value at the corresponding index of `INTEGERS` to `arrayOfConvertedChars`.
//  5. for each element in `arrayOfConvertedChars`, multiply `finalResult` by 10 and add the element's value.
//  6. return `result`

function stringToInteger(str) {
  const INTEGERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrayOfConvertedChars = [];
  let finalResult = 0;


  for (let i = 0; i < str.length; i++) {
    arrayOfConvertedChars.push(INTEGERS[str[i]]);
  }

  arrayOfConvertedChars.forEach(num => finalResult = (finalResult * 10) + num);

  return finalResult;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true