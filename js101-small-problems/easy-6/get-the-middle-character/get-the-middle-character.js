// Write a function that takes a non-empty string argument and returns the
// middle character(s) of the string. If the string has an odd length, you
// should return exactly one character. If the string has an even length, you
// should return exactly two characters.

// P
// input: a non-empty string
// output: the middle character(s) of the input
// explicit reqs: if the input has an odd length, output 1 character
//                if the input has an even length, output 2 characters
// implicit reqs: 

// E
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// D
// input: string
// output: string

// A
// 1. define a function named "centerOf" with one parameter "str".
// 2. determine the length of `str`.
// 3. if `str` length is odd, return the character of `str` at index (length / 2 floored).
// 4. otherwise return the characters of `str` at indexs (length / 2) and (length / 2) - 1.

// C
function centerOf(str) {
  let length = str.length;

  if (length % 2 === 1) {
    return str[Math.floor(length / 2)];
  } else {
    return str[(length / 2) - 1] + str[(length / 2)];
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"