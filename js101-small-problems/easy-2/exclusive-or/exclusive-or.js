// The || operator returns a truthy value if either or both of its operands are truthy,
// a falsey value if both operands are falsey. The && operator returns a truthy value
// if both of its operands are truthy, and a falsey value if either operand is falsey.
// This works great until you need only one, but not both, of two conditions to be truthy:
// the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments,
// and returns true if exactly one of its arguments is truthy, false otherwise.
// Note that we are looking for a boolean result instead of a truthy/falsy value
// as returned by || and &&.


// ### Understand the Problem
// - Input : two arguments which are truthy or falsy
// - Output : true or false
// - Explicit Requirements :
//  - function named xor
//  - xor takes 2 arguments
//  - returns true if exactly one argument is truthy
//  - returns false if not
// - Implicit Requirements :
// 	- ...
// - Other Rules :
// 	- ...

// ### Examples / Test Cases
// ```
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);
// ```

// ### Data Structure
// - Input : truthy or falsy value
// - Output : boolean
// - Other :
// 	- ...

// ### Algorithm
// 1. define a function named "xor" with 2 parameters "one" and "two"
// 2. inside the function, declare two variables "truthinessOfOne" and "truthinessOfTwo".
// 3. determine the truthiness or falsyness of `one` and `two` and assign these results to the respective "truthinessOf" variables.
// 4. if both variables are false, return false
// 5. if both variables are true, return false
// 6. if one variable is true, return true

function xor(one, two) {
  let truthinessOfOne = Boolean(one);
  let truthinessOfTwo = Boolean(two);

  if (truthinessOfOne === false && truthinessOfTwo === false) {
    return false;
  } else if (truthinessOfOne && truthinessOfTwo) {
    return false;
  } else return true;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);