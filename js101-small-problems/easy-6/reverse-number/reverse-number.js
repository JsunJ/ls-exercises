// Write a function that takes a positive integer as an argument and returns
// that number with its digits reversed.

// P
// input: a positive integer
// output: the input with its digits reversed
// explicit reqs:
// implicit reqs:

// E
// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
// reverseNumber(1);        // 1

// D
// input: number
// output: number

// A
// 1. define a function named "reverseNumber" with one parameter "integer".
// 2. convert `integer` to string "integerString".
// 3. loop through the characters in `integerString`.
// 4. for each character, unshift the current character to new array "integerArray".
// 5. join `integerArray` into a new string.
// 6. return this new string converted to a number.

// C
function reverseNumber(integer) {
  let integerString = String(integer);
  let integerArray = [];
  for (let i = 0; i < integerString.length; i++) {
    integerArray.unshift(integerString[i]);
  }
  return Number(integerArray.join(''));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1