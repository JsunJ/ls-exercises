// Write a function that takes a string of digits and returns the appropriate
// number as an integer. The string may have a leading + or - sign;
// if the first character is a +, your function should return a positive number;
// if it is a -, your function should return a negative number. If there is no
// sign, return a positive number.


// Understand the Problem
// - Input : string of digits
// - Output : appropriate number as an integer

// - Explicit Requirements :
// 	- string will always contain a valid number
//  - cannot use standard conversion methods

// - Implicit Requirements :
// 	- ...

// - Other Rules :
// 	- ...

// Examples / Test Cases

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true


// Data Structure
// - Input : string
// - Output : number

// - Other :
// 	- ...

// Algorithm
// 1. define a function "stringToSignedInteger" with one parameter "str".
//
//  1. declare a constant array "INTEGERS" of the numbers 0 through 9 to match against.
//  2. declare a variable "arrayOfConvertedChars" to store each converted from string character.
//  3. declare a variable "finalResult" initialized to 0.
//  4. if the input `str` has a leading - sign,
//    1. assign `str` to the value of `str` with the leading `-` removed.
//    2. loop through the characters of the input str.
//      1. for each character, push the value at the corresponding index of `INTEGERS` to `arrayOfConvertedChars`.
//    4. for each element in `arrayOfConvertedChars`, multiply `finalResult` by 10 and add the element's value.
//    5. return the negative value of `finalResult`
//  5. if the input `str` has a leading + sign,
//    1. assign `str` to the value of `str` with the leading `+` removed.
//  6. loop through the characters of the argument str.
//    1. for each character, push the value at the corresponding index of `INTEGERS` to `arrayOfConvertedChars`.
//  7. for each element in `arrayOfConvertedChars`, multiply `finalResult` by 10 and add the element's value.
//  8. return `finalResult`

function stringToSignedInteger(str) {
  const INTEGERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrayOfConvertedChars = [];
  let finalResult = 0;

  if (str[0] === "-") {
    str = str.slice(1);

    for (let i = 0; i < str.length; i++) {
      arrayOfConvertedChars.push(INTEGERS[str[i]]);
    }
  
    arrayOfConvertedChars.forEach(num => finalResult = (finalResult * 10) + num);

    return -Math.abs(finalResult);
  } else if (str[0] === "+") {
    str = str.slice(1);
  }

  for (let i = 0; i < str.length; i++) {
    arrayOfConvertedChars.push(INTEGERS[str[i]]);
  }

  arrayOfConvertedChars.forEach(num => finalResult = (finalResult * 10) + num);

  return finalResult;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true