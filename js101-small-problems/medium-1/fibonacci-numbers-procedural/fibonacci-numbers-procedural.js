function fibonacci(nth) {
  let temp;
  let lastFib = 1;
  let currentFib = 1;
  let place = 2;

  while (place < nth) {
    temp = currentFib;
    currentFib = lastFib + currentFib;
    lastFib = temp;
    place += 1;
  }

  return currentFib;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

// function fibonacci(nth) {
//   let previousTwo = [1, 1];

//   for (let counter = 3; counter <= nth; counter += 1) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }

//   return previousTwo[1];
// }