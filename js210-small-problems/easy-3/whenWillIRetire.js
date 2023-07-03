const readlineSync = require("readline-sync");
const prompt = readlineSync.prompt();

let age = parseInt(prompt('What is your age?'), 10);
let desiredRetire = parseInt(prompt('At what age would you like to retire?'), 10);
let currentYear = new Date().getFullYear();
let actualRetire = (currentYear + (desiredRetire - age));

console.log(`It's ${currentYear}. You will retire in ${actualRetire}`);
console.log(`You have only ${desiredRetire - age} years of work to go!`);