// Given a string of words separated by spaces, write a function that swaps the
// first and last letters of every word.

// P
// input: a string of words separated by spaces
// output: the input with first and last letters of every word swapped
// explicit: every word contains at least one letter.
//           the input will always contain at least one word.
//           the input contains nothing but words and spaces, no leading/trailing/
//           repeated spaces.

// E
// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"

// D
// input: string
// output: string

// A
// 1. define a function named "swap" with one parameter "str".
// 2. declare a variable "strArray" initialized to `str` split by whitespace.
// 3. declare a variable "swappedWordsArr" intialized to an empty array.
// 4. loop through the words of `strArray`.
//    1. declare a variable "swappedWord" equal the value of the current word's
//    last character + middle characters + first character.
//    2. push `swappedWord` into `swappedWordsArr`.
// 5. join by whitespace and return `swappedWordsArr`.

// C
function swap(str) {
  let strArray = str.split(' ');
  let swappedWordsArr = [];

  if (str.length === 1) return str;

  strArray.forEach(word => {
    if (word.length === 1) {
      swappedWordsArr.push(word);
    } else {
      let swappedWord = word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
      swappedWordsArr.push(swappedWord);
      }
  });

  return swappedWordsArr.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"