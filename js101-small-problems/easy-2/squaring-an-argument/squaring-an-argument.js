// Using the multiply() function from the "Multiplying Two Numbers"
// problem, write a function that computes the square of its argument
// (the square is the result of multiplying a number by itself).


// ### Understand the Problem
// - Input : number
// - Output : square of input
// - Explicit Requirements :
// 	- ...
// - Implicit Requirements :
// 	- input is a number
// - Other Rules :
// 	- ...

// ### Examples / Test Cases
// ```
// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true
// ```

// ### Data Structure
// - Input : number
// - Output : number
// - Other :
// 	- ...

// ### Algorithm
// 1. define a function named "square" that takes one argument "num".
// 2. inside the `square()` function, call the `multiply()` function with the arguments `num`, and `num`.
// 3. return the value of the callback function.

function multiply(numOne, numTwo) {
  return Number(numOne) * Number(numTwo);
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true