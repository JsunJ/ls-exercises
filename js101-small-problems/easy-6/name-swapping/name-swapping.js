// Write a function that takes a string argument consisting of a first name,
// a space, and a last name, and returns a new string consisting of the last
// name, a comma, a space, and the first name.

// P
// input: a string (first name, space, last name)
// output: a new string (last name, a comma, a space, first name)
// explicit reqs:
// implicit reqs:

// E
// swapName('Joe Roberts');    // "Roberts, Joe"

// D
// input: string
// output: string

// A
// 1. define a function named "swapName" with one parameter "name".
// 2. split `name` by whitespace and assign this value to "splitName"
// 3. declare a new variable named "newName", assign it the 2nd element of
//    `splitName` plus a comma plus a space plus the 1st element of `splitName`.
// 4. return `newName`.

// C
function swapName(name) {
  let splitName = name.split(' ');
  let newName = splitName[splitName.length - 1] + ', ' +
                splitName.slice(0, splitName.length - 1).join(' ');
  return newName;
}

console.log(swapName('Joe Roberts')); // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson")