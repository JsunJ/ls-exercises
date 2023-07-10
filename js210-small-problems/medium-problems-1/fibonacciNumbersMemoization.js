function fibonacci(n, memo = {1: 1, 2: 1,}) {
  if (memo[n]) {
    return memo[n];
  } else {
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }
}