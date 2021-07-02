// Write a function that rotates the last count digits of a number. To perform
// the rotation, move the first of the digits that you want to rotate to the end
// and shift the remaining digits to the left.

// P
// input: a number and a count signifying the last digits to rotate
// output: the rotated input
// explicit reqs: rotate the last `count` digits of the input
// implicit reqs:

// E
// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

// D
// input: 2 numbers
// output: number
// other: convert number to string

// A
// 1. define "rotateRightmostDigits" function with two parameters "inputNum" and
//    "count".
// 2. convert `inputNum` to string "inputStr".
// 3. slice `inputStr` into 2 substrings based on `count`. "nonRotatedStr" and
//    "toRotateStr".
// 4. move the first number of `toRotateStr` to the end "rotatedStr".
// 5. append `rotatedStr` to `nonRotatedStr`.
// 6. return the result converted back to number.

// C
function rotateRightmostDigits(inputNum, count) {
  let inputStr = String(inputNum);
  let nonRotatedStr = inputStr.slice(0, inputStr.length - count);
  let toRotateStr = inputStr.slice(-count)
  let rotatedStr = toRotateStr.slice(1) + toRotateStr.slice(0, 1);

  let outputStr = nonRotatedStr + rotatedStr;
  return Number(outputStr);
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917