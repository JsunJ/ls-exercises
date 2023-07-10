function fibonacci(nth) {
  let count = 2;
  let currentFib = 1;
  let previousFib = 1;

  while(count < nth) {
    let tempFib = currentFib;
    currentFib += previousFib;
    previousFib = tempFib;
    count += 1;
  }

  return currentFib;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050