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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917