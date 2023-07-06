function sequence(count, num) {
  let result = [];
  if (count === 0) return result;

  for (let multiple = 1; multiple <= count; multiple += 1) {
    result.push(num * multiple);
  }

  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []