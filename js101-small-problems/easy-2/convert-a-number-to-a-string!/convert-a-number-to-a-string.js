// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on)
// to the string representation of that integer.


// Understand the Problem
// - Input : non-negative integer
// - Output : the string representation of the input

// - Explicit Requirements :
// 	- do not use any standard conversion method

// - Implicit Requirements :
// 	- all inputs will be simple non-negative integers

// - Other Rules :
// 	- ...

// Examples / Test Cases

// integerToString(4321);        // "4321"
// integerToString(0);           // "0"
// integerToString(5000);        // "5000"
// integerToString(1234567890);  // "1234567890"


// Data Structure
// - Input : number
// - Output : string

// - Other :
// 	- ...

// Algorithm
// 1. define a function named "integerToString" with one parameter "integer".
// 2. define a "numberStrings" array consisting of strings from "0" to "9".
// 3. declare a variable "resultString" initialized to an empty string.
// 4. while `integer` is greater than 0,
//   1. declare a "remainder" initialized to the remainder of `integer` divided by 10.
//   2. remove the rightmost digit of `integer` and reassign `integer` to this new value.
//   3. assign the value of the element at [remainder] index of `numberStrings` + `resultString` to `resultString`.
// 5. return `resultString`.

function integerToString(integer) {
  const NUMBER_STRINGS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let resultString = '';

  do {
    let remainder = (integer % 10);
    integer = Math.floor(integer / 10);
    resultString = NUMBER_STRINGS[remainder] + resultString;
  } while (integer > 0);

  return resultString;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"