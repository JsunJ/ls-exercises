// Write a function that takes a string argument and returns a new string
// containing the words from the string argument in reverse order.

// P
// input: a string
// output: a new string containing the input words in reverse
// explicit reqs:
// implicit reqs:

// E
// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"

// D
// input: string
// output: string

// A
// 1. define a function named "reverseSentence" with one parameter "str"
// 2. split `str` by whitespace and assign this value to "splitStr".
// 3. reverse `splitStr`.
// 4. return `splitStr` joined by whitespace.

// C
function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"