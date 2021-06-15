// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string with
// all of the non-alphabetic characters replaced by spaces. If one or more
// non-alphabetic characters occur in a row, you should only have one space in
// the result (i.e., the result string should never have consecutive spaces).

// P
// input: a string consisting of some words and an assortment of non-alphabetic
//        characters
// output: a string with all non-alphabetic characters replaced with spaces
// explicit: the output should not have consecutive spaces.

// E
// cleanUp("---what's my +*& line?");    // " what s my line "

// D
// input: string
// output: string

// A
// 1. define a function named "cleanUp" with one parameter "str".
// 2. declare a variable "nonAlphabeticChars" initialized to a regex for such.
// 3. using `nonAlphabeticChars`, replace all such characters in `str` with whitespaces.
// 4. declare a "resultStr" variable initialized to ''.
// 4. loop through the characters of `str`
//    1. if the current character and the next character are both whitespaces,
//       add the current character to `resultStr` and skip to the next iteration.
//    2. add the current character to `resultStr`
// 5. return `resultStr`.

// C
// function cleanUp(str) {
//   let nonAlphabeticChars = /\W+/g
//   let newStr = str.replace(nonAlphabeticChars, ' ');
//   let resultStr = '';

//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] === ' ' && newStr[i + 1] === ' ') {
//       resultStr += newStr[i];
//       continue;
//     }
//     resultStr += newStr[i];
//   }
//   return resultStr;
// }

function cleanUp(str) {
  let nonAlphabeticRegex = /[^a-z]+/ig; 
                           // Using the '+' quantifier here will treat 
                           // consecutive non-alpha chars as a single match,
                           // requiring only 1 whitespace to replace them.
  return str.replace(nonAlphabeticRegex, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "