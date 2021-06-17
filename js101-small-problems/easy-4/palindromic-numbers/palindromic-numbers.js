// Write a function that returns true if its integer argument is palindromic,
// or false otherwise. A palindromic number reads the same forwards and backwards.

// P
// input: an integer
// output: true or false if the input is palindromic
// implicit: input is always a positive integer

// E
// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

// D
// input: number
// output: boolean

// A
// 1. define a function named "isPalindromicNumber" with one parameter "integer".
// 2. convert `integer` to a string and assign to "integerString".
// 3. split `integerString` into an array of its chars and assign to "integerArray".
// 4. determine if joined `integerArray` is equal to reversed joined`integerArray` and return this value.

// C
function isPalindromicNumber(integer) {
  let integerString = String(integer);
  let reversedIntegerString = integerString.split('').reverse().join('');
  return Number(integerString) === Number(reversedIntegerString);
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true