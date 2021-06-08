const readline = require('readline-sync');

let userInput = parseInt(readline.question('Enter an integer greater than 0: '), 10);

while (Number.isNaN(Number(userInput)) || userInput <= 0) {
  console.log('Please enter a valid integer greater than 0.');
  userInput = parseInt(readline.question(), 10);
}

let sum = 0;
let product = 1;
let counter = 1;

while (counter <= userInput) {
  sum = sum + counter;
  product = product * counter;
  counter += 1;
}

let userResponse = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ')

while (userResponse !== 's' && userResponse !== 'p') {
  console.log('Please enter "s" for sum or "p" for product.');
  userResponse = readline.question();
}

if (userResponse === 's') {
  console.log(`\nThe sum of the integers between 1 and ${userInput} is ${sum}.`);
} else {
  console.log(`\nThe product of the integers between 1 and ${userInput} is ${product}.`);
}