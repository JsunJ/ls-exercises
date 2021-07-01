// Write a function that takes a string as an argument and returns that string
// with a staggered capitalization scheme. Every other character, starting from
// the first, should be capitalized and should be followed by a lowercase or
// non-alphabetic character. Non-alphabetic characters should not be changed,
// but should be counted as characters for determining when to switch between
// upper and lower case.

// P
// input: string
// output: new string with staggered capitalization
// explicit reqs: every other character starting from the first should,
//                be capitalized,
//                should be followed by a lowercase or non-alphabetic character.
//                non-alphabetic characters should not be changed.
// implicit reqs:

// E
// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

// D
// input: string
// output: string
// other: array of individual characters

// A
// 1. define a function named "staggeredCase" with one parameter "str".
// 2. convert the entire string to lowercase and split it into an array of characters.
// 3. declare a new string to hold the result
// 4. loop through the characters of the array starting at the first
//    1. if the current character's index is even or 0, add its uppercase version to the new string
//    2. if the index is odd, add the character as-is to the new string
// 5. return the new string

// C
function staggeredCase(str) {
  let charArr = str.toLowerCase().split('');
  let resultStr = '';

  for (let i = 0; i < charArr.length; i++) {
    let currentChar = charArr[i];
    if (i % 2 === 0) {
      resultStr += currentChar.toUpperCase();
    } else {
      resultStr += currentChar;
    }
  }

  return resultStr;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"