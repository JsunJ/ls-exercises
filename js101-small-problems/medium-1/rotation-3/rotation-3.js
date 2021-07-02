function maxRotation(integer) {
  let length = String(integer).length;
  for (let count = length; count >= 2; count -= 1) {
    integer = rotateRightmostDigits(integer, count);
  }
  return integer;
}

function rotateRightmostDigits(inputNum, count) {
  let inputStr = String(inputNum);
  let nonRotatedStr = inputStr.slice(0, inputStr.length - count);
  let toRotateStr = inputStr.slice(-count)
  let rotatedStr = toRotateStr.slice(1) + toRotateStr.slice(0, 1);

  let outputStr = nonRotatedStr + rotatedStr;
  return Number(outputStr);
}

// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

// 735291, 6, 352917
// 3 52917, 5, 329175
// 32 9175, 4, 321759
// 321 759, 3, 321597
// 3215 97 2, 321579

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845