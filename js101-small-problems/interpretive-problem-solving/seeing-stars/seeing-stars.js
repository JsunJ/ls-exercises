// Write a function that displays an 8-pointed star in an NxN grid, where N is
// an odd integer that is supplied as an argument to the function.
// The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

// P
// input: an odd integer indicating the size of the grid
// output: an 8-pointed star
// reqs: each row has a length of `input`
//       each row has 3 asterisks
//       the middle row has `input` asterisks
//       rows among the first and second "half" have varying numbers of spaces
//       between their 3 asterisks

// E
// star(7);
// // logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

// star(9);
// // logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

// D
// input: number (odd integer)
// output: logged 8-point star

// A
// 1. declare a spaces variable = to (input - 3) / 2
// 2. declare a padding variable = to 0
// 2. loop from 1 to `input`
//    1. log 3 asterisks with `spaces` number of spaces between them and padding at the start
//    2. decrement `spaces` by 1
//    3. increment `padding` by 1
//    4. when the current iteration number is half of `input`
//       1. log `input` number of asterisks
//       2. spaces = 0
//       3. padding = (input - 3) / 2
//    5. log 3 asterisks with `spaces` number of spaces between them and padding at the start
//    6. increment `spaces` by 1
//    7. decrement `padding` by 1

// C
function logFirstHalf(integer) {
  let spaces = (integer - 3) / 2;
  let padding = 0;
  let row = 1;

  while (row < (integer / 2)) {
    console.log(`${' '.repeat(padding)}*${' '.repeat(spaces)}*${' '.repeat(spaces)}*`);
    spaces -= 1;
    padding += 1;
    row += 1;
  }
}

function logMiddleRow(integer) {
  console.log('*'.repeat(integer));
}

function logSecondHalf(integer) {
  let padding = (integer - 3) / 2;
  let spaces = 0;
  let row = 1;

  while (row < (integer / 2)) {
    console.log(`${' '.repeat(padding)}*${' '.repeat(spaces)}*${' '.repeat(spaces)}*`);
    spaces += 1;
    padding -= 1;
    row += 1;
  }  
}

function star(integer) {
  logFirstHalf(integer);
  logMiddleRow(integer);
  logSecondHalf(integer);
}

console.log(star(7));
console.log(star(9));