const readline = require('readline-sync');

let billAmount = parseFloat(readline.question('What is the bill? '));

let tipPercentage = parseFloat(readline.question('What is the tip percentage? '));

let tipAmount = billAmount * (tipPercentage / 100);

let totalBill = billAmount + tipAmount;

console.log(`\nThe tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`);