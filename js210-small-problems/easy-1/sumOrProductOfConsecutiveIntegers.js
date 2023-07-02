let readlineSync = require("readline-sync");
let prompt = readlineSync.prompt();

let integer = prompt('Please enter an integer greater than 0:');
integer = parseInt(integer, 10);
let choice = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

if (choice === 's') {
  let sum = 0;
  for (let num = 1; num <= integer; num += 1) {
    sum += num;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (choice === 'p') {
  let product = 1;
  for (let num = 1; num <= integer; num += 1) {
    product *= num;
  }
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
}