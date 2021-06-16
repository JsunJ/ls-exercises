// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

// P
// input: user age
//        when the user would like to retire
// output: message including the current year, the year they will retire, and
//         how many more years of work they have

// E
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// D
// input: numbers (readline)
// output: strings

// A
// 1. declare a variable named "currentAge" and prompt the user for this value.
// 2. declare a variable named "retirementAge" and prompt the user for this value.
// 3. subtract `currentAge` from `retirementAge` and set this to variable `yearsRemaining`.
// 4. log the current year, `current year plus yearsRemaining` and `yearsRemaining` to the console.

// C
const readline = require('readline-sync');

let currentAge = readline.question('What is your age? ');
let retirementAge = readline.question('At what age would you like to retire? ');

let yearsRemaining = retirementAge - currentAge;
let currentYear = new Date().getFullYear();
console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsRemaining}.`);
console.log(`You have only ${yearsRemaining} years of work to go!`);