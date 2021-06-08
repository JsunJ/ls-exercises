// Write a program that prompts the user for two positive integers,
// and then prints the results of the following operations on those two numbers:
// addition, subtraction, product, quotient, remainder, and power.
// Do not worry about validating the input.



// ### Understand the Problem
// - Input : two positive integers
// - Output : the sum, difference, product, quotient, remainder, and power of the two numbers
// - Explicit Requirements :
// 	- input integers are positive
// - Implicit Requirements :
// 	- inputs will always be integers
// - Other Rules :
// 	- ...

// ### Examples / Test Cases
// ```
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23
// ```

// ### Data Structure
// - Input : number
// - Output : string
// - Other :
// 	- ...

// ### Algorithm
// 1. declare "firstNumber" variable and prompt user for its value
// 2. declare "secondNumber" variable and prompt user for its value
// 3. log the result of addition between the two variables to the console
// 3. log the result of subtraction between the two variables to the console
// 3. log the result of multiplication between the two variables to the console
// 3. log the result of division between the two variables to the console
// 3. log the remainder of `firstNumber` divided by `secondNumber` to the console
// 3. log the result of raising `firstNumber` to the power of `secondNumber` to the console

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('Enter the first number:');
let firstNumber = Number(readline.question());

prompt('Enter the second number:');
let secondNumber = Number(readline.question());

prompt(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
prompt(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
prompt(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
prompt(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
prompt(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
prompt(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);