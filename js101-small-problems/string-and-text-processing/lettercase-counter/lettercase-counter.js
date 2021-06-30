// Write a function that takes a string and returns an object containing three
// properties: one representing the number of characters in the string that are
// lowercase letters, one representing the number of characters that are
// uppercase letters, and one representing the number of characters that are
// neither.

// P
// input: string
// output: object containing 3 properties
// explicit reqs: one property represents the number of lowercase characters
//                one property represents the number of uppercase characters
//                one property represents the number of non-alphabetic chars
// implicit reqs:

// E
// letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

// D
// input: string
// output: object (3 properties)

// A
// 1. define a function named "letterCaseCount" with one parameter "str".
// 2. define a regex for non-alphabetic characters. "regex"
// 3. declare an obj "obj" with the keys "lowercase", "uppercase", and "neither"
// 4. declare variables "lowercaseCount", "uppercaseCount", and "neitherCount".
// 5. initialize these variables to their helper function return values
// 6. set the property values of obj with these variables.

// 1. define helper functions "countLowercase", "countUppercase" and "countNeither".
// 2. set a count variable
// 3. loop through `str`
//    1. count the respective occurences
// 4. return `count`

// C
function letterCaseCount(str) {
  let obj = {};
  obj.lowercase = countLowercase(str);
  obj.uppercase = countUppercase(str);
  obj.neither = countNeither(str);
  return obj;
}

function countLowercase(str) {
  let count = 0;
  let regex = /[a-z]/;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) count += 1;
  };
  return count;
}

function countUppercase(str) {
  let count = 0;
  let regex = /[A-Z]/;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) count += 1;
  };
  return count;
}

function countNeither(str) {
  let count = 0;
  let regex = /[^a-zA-Z]/;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) count += 1;
  };
  return count;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }