function isOdd(number) {
  let absoluteValue = Math.abs(number);
  if (absoluteValue % 2 === 1) {
    return true;
  } else if (absoluteValue % 2 === 0) {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true