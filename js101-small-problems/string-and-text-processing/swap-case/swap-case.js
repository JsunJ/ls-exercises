// Write a function that takes a string as an argument and returns that string
// with every lowercase letter changed to uppercase and every uppercase
// letter changed to lowercase. Leave all other characters unchanged.

// P
// input: string
// output: new string with each individual character case reversed
// explicit reqs: non-alphabetic characters are left as-is
// implicit reqs:

// E
// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// D
// input: string
// output: string

// A
// 1. define a function named "swapCase" with one parameter "str".
// 2. split the `str` into an array of characters
// 3. declare a new string to hold the result
// 4. loop through the split string array
//    1. if the current character is uppercase, add its lowercase version to the result.
//    2. if it is lowercase, add its uppercase version to the result.
//    3. add the current character to the result.
// 5. return the result string.

// C
function swapCase(str) {
  let splitStr = str.split('');
  let resultStr = '';

  for (let i = 0; i < splitStr.length; i++) {
    let currentChar = splitStr[i];
    if (currentChar === currentChar.toUpperCase()) {
      resultStr += currentChar.toLowerCase();
    } else if (currentChar === currentChar.toLowerCase()) {
      resultStr += currentChar.toUpperCase();
    }
  }

  return resultStr;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"