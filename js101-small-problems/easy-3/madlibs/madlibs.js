// Create a simple madlib program that prompts for a noun, a verb, an adverb,
// and an adjective, and injects them into a story that you create.

// P
// input: noun, verb, adverb, adjective (prompt)
// output: madlib story

// E
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// D
// input: string (readline)
// output: string

// A
// 1. declare a "noun" variable and prompt user for the value
// 2. declare a "verb" variable and prompt user for the value
// 3. declare a "adjective" variable and prompt user for the value
// 4. declare a "quickly" variable and prompt user for the value
// 5. log a story using the 4 variables

// C
const readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter an adjective: ');
let adverb = readline.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);