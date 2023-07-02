function multisum(otherNum) {
  let numsBetween = [];

  for (let num = 1; num <= otherNum; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) {
      numsBetween.push(num);
    }
  }

  return numsBetween.reduce((sum, num) => {
    return sum + num;
  });
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168