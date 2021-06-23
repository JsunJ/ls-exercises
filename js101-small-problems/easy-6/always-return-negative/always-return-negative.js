// Write a function that takes a number as an argument. If the argument is a
// positive number, return the negative of that number. If the argument is a
// negative number, return it as-is.

// P
// input: a number
// output: the negative of the input
// explicit reqs: if the input is positive, output the negative
//                if the input is negative, output it as-is
// implicit reqs: if the input is 0, output -0

// E
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

// D
// input: number
// output: number

// A
// 1. define a function named "negative" with one parameter "number".
// 2. determine if `number` is positive or negative.
// 3. if `number` is 0, return -0
// 4. if `number` is positive, return `number` * (-1).
// 5. if `number` is negative, return `number`.

// C
// function negative(number) {
//   if (number === 0) return -0;
//   if (Math.sign(number) === 1) return (number * -1);
//   return number;
// }

function negative(number) {
  return number >= 0 ? number * -1 : number;
}