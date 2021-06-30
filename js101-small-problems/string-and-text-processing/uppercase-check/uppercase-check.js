// Write a function that takes a string argument and returns true if all of the
// alphabetic characters inside the string are uppercase; false otherwise.
// Ignore characters are that are not alphabetic.

// P
// input: string
// output: true or false if all alphabetic characters in input are uppercase
// explicit: ignore non-alphabetic characters

// E
// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true

// D
// input: string
// output: boolean

// A
// 1. define a function named "isUppercase" with one parameter "str".
// 2. convert `str` to an array of individual characters.
// 3. filter out non-alphabetic characters from `str`
// 4. loop through "filteredCharArr" 
//    1. check if current character is uppercase
//    2. return false if not uppercase
// 5. return true;

// C
function isUppercase(str) {
  let charArr = str.split('');
  let filteredCharArr = charArr.filter(char => {
    let regex = /[a-zA-Z]/;
    return regex.test(char);
  });

  for (let i = 0; i < filteredCharArr.length; i++) {
    if (filteredCharArr[i] !== filteredCharArr[i].toUpperCase()) {
      return false;
    }
  }

  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true