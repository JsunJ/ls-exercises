// Write a function that returns true if the string passed as an argument is a
// palindrome, or false otherwise. A palindrome reads the same forwards and
// backwards. For this problem, the case matters and all characters matter.

// P
// input: a string
// output: true if the input is a palindrome, false if not

// E
// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

// D
// input: string
// output: boolean

// A
// 1. define a function named "isPalindrome" with one parameter "str".
// 2. declare a variable "strArray" initialized to `str` split into an array.
// 3. declare a variable "reversedStrArray" initialized to `strArray` sliced and reversed.
// 4. compare joined `strArray` to joined `reversedStrArray`.
//    1. if they are equal, return true.
//    2. if not, return false.

// C
function isPalindrome(str) {
  let strArray = str.split('');
  let reversedStrArray = strArray.slice().reverse();

  return (strArray.join('') === reversedStrArray.join(''));
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true