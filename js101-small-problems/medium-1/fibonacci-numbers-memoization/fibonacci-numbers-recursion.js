// Write a recursive function that computes the nth Fibonacci number, where
// nth is an argument passed to the function.

// P
// input: the nth Fibonacci number (aka 12th Fibonacci number) wanted
// output: the nth Fibonacci number value (aka 144)
// explicit reqs:
// implicit reqs:

// E
// fibonacci(1);       // 1
// fibonacci(2);       // 1
// fibonacci(3);       // 2
// fibonacci(4);       // 3
// fibonacci(5);       // 5
// fibonacci(12);      // 144
// fibonacci(20);      // 6765

// D
// input: number
// output: number

// A

// C
function fibonacci(nth) {
  if (nth <= 2) return 1;

  return (fibonacci(nth - 1)) + (fibonacci(nth - 2));
}