// Write a function that takes one argument, a positive integer, and returns a
// list of the digits in the number.

// P
// input: a positive integer
// output: a list of digits in the input
// explicit reqs:
// implicit reqs: input will always be a positive integer
//                input will not be empty

// E
// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

// D
// input: number
// output: array

// A
// 1. define a function named "digitList" with one parameter "integer".
// 2. convert `integer` to a string "integerString".
// 3. split `integerString` into an array of individual characters "stringArray".
// 4. loop through the characters in `stringArray`
//    1. push each character-converted-to-number into a new array "result".
// 5. return result.

// C
// function digitList(integer) {
//   let stringArray = String(integer).split('');
//   let result = [];
//   stringArray.forEach(char => result.push(Number(char)));
//   return result;
// }

function digitList(integer) {
  let stringArray = String(integer).split('');
  return stringArray.map(char => (Number(char)));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]