// Build a program that generates Teddy's age, and logs it to the console.
// Have the age be a random number between 20 and 120 (inclusive).

// P
// input: 
// output: message stating teddy's (randomly generated) age

// E
// Teddy is 69 years old!

// D
// input:
// output: string

// A
// 1. declare a variable "age" initialized to a random number between 20 and 120.
// 2. log "Teddy is `age` years old!" to the console.

// C
let age = Math.floor(Math.random() * (120 - 20 + 1) + 20);
console.log(`Teddy is ${age} years old!`);