// Write a function that takes a string, doubles every consonant character in
// the string, and returns the result as a new string. The function should not
// double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// P
// input: a string
// output: a new string with every consonant character in the input doubled
// explicit reqs: vowels, digits, punctuation and whitespace should not be doubled.
// implicit reqs:

// E
// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""

// D
// input: string
// output: string

// A
// 1. define a function named "doubleConsonants" with one parameter "str".
// 2. declare a constant "CONSONANTS" initialized to an array of each consonant.
// 3. declare a variable "charArray" initialized to an empty array.
// 4. split `str` by character and loop through this new value
//    1. if the current character exists in `CONSONANTS`, push it to `charArray`
//       twice.
//    2. if it does not, push it to `charArray` once.
// 5. return `charArray` joined.

// C
function doubleConsonants(str) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'q',
                      's', 't', 'v', 'x', 'z', 'h', 'r', 'w', 'y'];
  let charArray = [];
  for (let i = 0; i < str.split('').length; i++) {
    if (CONSONANTS.includes(str.split('')[i].toLowerCase())) {
      charArray.push(str.split('')[i], str.split('')[i]);
    } else {
      charArray.push(str.split('')[i]);
    }
  }
  return charArray.join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""