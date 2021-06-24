// Write a function that takes a string as an argument and returns true if all
// parentheses in the string are properly balanced, false otherwise.
// To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

// P
// input: a string
// output: true or false depending on whether or not all parentheses in the input
//         are properly balanced
// explicit reqs: balanced pairs must each start with (.
// implicit reqs:

// E
// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// D
// input: string
// output: boolean

// A
// 1. define a function named "isBalanced" with one parameter "str".
// 2. remove all non-parenthesis characters from `str` and assign this value to
//    "parenthesesStr".
// 3. declare a variable "parenCount" intiailized to 0.
// 4. loop through the parens in `parenthesesStr`.
//    1. for each opening paren, increment `parentCount` by 1.
//    2. for each closing paren, decrement `parentCount` by 1.
//    3. if `parenCount` is ever negative, return false;
// 5. if `parenCount` is not equal to 0, return false;

// C
function isBalanced(str) {
  let nonParenRegex = /[^()]/g
  let parenthesesStr = str.replaceAll(nonParenRegex, '');
  let parenCount = 0;

  for (let i = 0; i < parenthesesStr.length; i += 1) {
    if (parenthesesStr[i] === '(') parenCount += 1;
    if (parenthesesStr[i] === ')') parenCount -= 1;
    if (parenCount < 0) return false;
  }

  return parenCount === 0;
};

// function isBalancedChar(string) {
//   const chars = {
//     parens: 0,
//     sqBracks: 0,
//     curlyBracks: 0,
//     singleQ: 0,
//     doubleQ: 0
//   }

//   for (let i = 0; i < string.length; i++) {
//     if (["(", ")", "[", "]", "{", "}", "'", '"'].includes(string[i])) {
//       changeCharCount(string[i], chars);
//     }

//     if (Object.values(chars).some(value => value < 0)) break;
//   }

//   return Object.values(chars).every(amount => amount === 0);
// }

// function changeCharCount(char, obj) {
//   switch (char) {
//     case "(": return obj.parens += 1;
//     case ")": return obj.parens -= 1;
//     case "[": return obj.sqBracks += 1;
//     case "]": return obj.sqBracks -= 1;
//     case "{": return obj.curlyBracks += 1;
//     case "}": return obj.curlyBracks -= 1;
//     case "'": return obj.singleQ > 0 ? obj.singleQ -= 1 : obj.singleQ += 1;
//     case '"': return obj.doubleQ > 0 ? obj.doubleQ -= 1 : obj.doubleQ += 1;
//   }
// }

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);