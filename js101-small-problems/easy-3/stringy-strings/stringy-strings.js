// Write a function that takes one argument, a positive integer, and returns a
// string of alternating '1's and '0's, always starting with a '1'. The length
// of the string should match the given integer.

// P
// input: positive integer
// output: string of alternating '1's and '0's
// explicit: the output should always start with a '1'.
//           the length of the output should match the input integer.

// E
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// D
// input: number
// output: string

// A
// 1. define a function named "stringy" with one parameter "integer".
// 2. declare a variable `result` initialized to an empty string.
// 3. declare a variable `counter` initialized to 0.
// 4. start a loop from `counter` to `integer`.
//    1. if the curent loop iteration is odd, add '0' to `result`.
//    2. otherwise add '1'.
// 5. return `result`.

// C
function stringy(integer) {
  let result = '';
  let counter = 0;

  while (counter < integer) {
    if (counter % 2 === 1) {
      result += '0';
    } else {
      result += '1';
    }

    counter += 1;
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"