// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

// P
// input: a string
// output: a new string containing every character in the input doubled
// explicit reqs:
// implicit reqs:

// E
// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

// D
// input: string
// output: string

// A
// 1. define a function named "repeater" with one parameter "str".
// 2. declare a variable "charArray" initialized to [].
// 3. split `str` by character and loop through this new value
//    1. push the current character to `charArray` twice.
// 4. return the value of `charArray` joined

// C
function repeater(str) {
  let charArray = [];
  for (let i = 0; i < str.split('').length; i++) {
    charArray.push(str.split('')[i], str.split('')[i]);
  }
  return charArray.join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""