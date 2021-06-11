// Write a function that takes a string and returns a new string that contains
// the value of the original string with all consecutive duplicate characters
// collapsed into a single character.

// P
// input: string
// output: new string with all consecutive duplicate characters collapsed into a
//         single character
// implicit: input will always be a string

// E
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// D
// input: string
// output: string

// A
// 1. define a function named "crunch" with one parameter "str".
// 2. declare a variable "crunchedStr" initialized to an empty string.
// 3. declare a variable "lastAddedChar" initialized to an empty string.
// 4. iterate through the characters of the input `str`
//    1. compare the current character's value to the value of `lastAddedChar`.
//    2. if they are not the same, add the current character to `crunchedStr`.
//    3. set `lastAddedChar` to the current value
// 5. return `crunchedStr`.

// C
function crunch(str) {
  let crunchedStr = '';
  let lastAddedChar = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== lastAddedChar) {
      crunchedStr += str[i];
      lastAddedChar = str[i];
    }
  }

  return crunchedStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""