const readlineSync = require("readline-sync");
const prompt = readlineSync.prompt();

let firstNum = prompt('Enter the 1st number:');
let secondNum = prompt('Enter the 2nd number:');
let thirdNum = prompt('Enter the 3rd number:');
let fourthNum = prompt('Enter the 4th number:');
let fifthNum = prompt('Enter the 5th number:');
let sixthNum = prompt('Enter the 6th number:');

let fiveArray = [firstNum, secondNum, thirdNum, fourthNum, fifthNum];

if (fiveArray.includes(sixthNum)) {
  console.log(`The number ${sixthNum} appears in ${fiveArray}`);
} else {
  console.log(`The number ${sixthNum} does not appear in ${fiveArray}`);
}