function maxRotation(num) {
  let rotations = num.toString().length;
  if (rotations === 1) return num;

  let currentRotation = num;

  while (rotations >= 2) {
    currentRotation = rotateRightmostDigits(currentRotation, rotations);
    rotations -= 1;
  }

  return currentRotation;
}

function rotateRightmostDigits(num, n) {
  let numArray = num.toString().split('').map(str => parseInt(str, 10));
  let digitsToRotate = numArray.slice(-n);
  let rotatedDigits = rotateArray(digitsToRotate);
  return parseInt(numArray.slice(0, -n).concat(rotatedDigits).join(''), 10);
}

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  let result = [];

  result.push(arr.slice(1), arr.slice(0, 1));
  return result.flat();
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845