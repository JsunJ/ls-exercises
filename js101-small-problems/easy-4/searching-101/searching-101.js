// Write a program that solicits six numbers from the user and logs a message
// that describes whether the sixth number appears among the first five numbers.

// P
// input: six numbers (prompt)
// output: a message stating whether or not the sixth number appears in the
//         first five.

// E
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

// D
// input: numbers (readline)
// output: string

// A
// 1. declare a variable "numbersArray" initialized to an empty array.
// 2. prompt the user to enter a number and push the value to `numbersArray`.
// 3. prompt the user to enter a number and push the value to `numbersArray`.
// 4. prompt the user to enter a number and push the value to `numbersArray`.
// 5. prompt the user to enter a number and push the value to `numbersArray`.
// 6. prompt the user to enter a number and push the value to `numbersArray`.
// 7. prompt the user to enter a number and assign this value to a variable
//    "sixthNumber".
// 8. log whether `numbersArray` includes `sixthNumber` or not.

const readline = require('readline-sync');

let numbersArray = [];
numbersArray.push(readline.question('Enter the 1st number: '));
numbersArray.push(readline.question('Enter the 2nd number: '));
numbersArray.push(readline.question('Enter the 3rd number: '));
numbersArray.push(readline.question('Enter the 4th number: '));
numbersArray.push(readline.question('Enter the 5th number: '));

let sixthNumber = readline.question('Enter the last number: ');

if (numbersArray.includes(sixthNumber)) {
  console.log(`The number ${sixthNumber} appears in ${numbersArray.join()}.`);
} else {
  console.log(`The number ${sixthNumber} does not appear in ${numbersArray.join()}.`);
}