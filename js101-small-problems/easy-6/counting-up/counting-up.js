// Write a function that takes an integer argument and returns an array
// containing all integers between 1 and the argument (inclusive), in ascending
// order.

// P
// input: an integer
// output: an array containing all integers between 1 and the input (inclusive)
// explicit reqs: the array integers should be in ascending order
// implicit reqs:

// E
// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]

// D
// input: number
// output: array

// A
// 1. define a function named "sequence" with one parameter "integer".
// 2. declare a variable "count" initialized to 1;
// 3. declare a variable "array" initialized to an empty array.
// 4. start a loop
//    1. push `count` to `array`.
//    2. increment `count` by 1
//    3. end the loop when `count` is greater than `integer`.
// 5. return `array`. 

// C
function sequence(integer) {
  let array = [];
  let count = 1;
  while (count <= integer) {
    array.push(count);
    count += 1;
  }
  return array;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]