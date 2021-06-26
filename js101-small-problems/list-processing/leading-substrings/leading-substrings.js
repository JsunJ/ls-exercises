// Write a function that takes a string argument and returns a list of
// substrings of that string. Each substring should begin with the first letter
// of the word, and the list should be ordered from shortest to longest.

// P
// input: a string
// output: an array of the input's substrings
// explicit reqs: each output substring should begin with the first letter of
//                the input string
//                the output array should be ordered from shortest to longest
// implicit reqs:

// E
// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// D
// input: string
// output: array

// A
// 1. define a function named "leadingSubstrings" with one parameter "str".
// 2. split `str` into an array of characters and assign to "charArr".
// 3. declare a variable "currentSubstr" initialized to the first character in
//    `charArr`.
// 4. declare an empty array to hold the substrings "substrArr".
// 5. loop through the characters in `charArr` starting at the 2nd character
//    1. add the current character to `currentSubstr`.
//    2. push `currentSubstr` to `substrArr`.
// 6. return `substrArr`.

// C
// function leadingSubstrings(str) {
//   let charArr = str.split('');
//   let currentSubstr = charArr[0];
//   let substrArr = [];

//   for (let i = 1; i <= charArr.length; i++) {
//     substrArr.push(currentSubstr);
//     currentSubstr += charArr[i];
//   }

//   return substrArr;
// }

function leadingSubstrings(str) {
  let charArr = str.split('');

  let substrArr = charArr.map((_, idx) => {
    return str.slice(0, idx + 1)
  });

  return substrArr;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]