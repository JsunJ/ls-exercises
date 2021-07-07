// Write a function that takes a string and returns an object containing the
// following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// P
// input: a string
// output: an object containing the following:
//         percentage of characters that are lowercase
//         percentage of characters that are uppercase
//         percentage of characters that are neither (non alphabetical)

// E
// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// D
// input: string
// output: object

// A
// 1. declare regexes of non-alphabetical, uppercase A-Z, lowercase a-z.
// 2. declare a result object with the required properties
// 3. loop through the characters of the input string
//    1. if the current character is nonalphabetical, increment the obj property
//    2. if the current character is uppercase, increment the obj property
//    3. if the current character is lowercase, increment the obj property
// 4. calculate the percentages of the property values and reassign
// 5. return the result object

// C
function letterPercentages(str) {
  let nonAlphaRegex = /[^a-z]/i;
  let uppercaseRegex = /[A-Z]/;

  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (nonAlphaRegex.test(currentChar)) {
      result.neither += 1;
    } else if (uppercaseRegex.test(currentChar)) {
      result.uppercase += 1;
    } else {
      result.lowercase += 1;
    }
  }

  result.lowercase = ((result.lowercase / str.length) * 100).toFixed(2);
  result.uppercase = ((result.uppercase / str.length) * 100).toFixed(2);
  result.neither = ((result.neither / str.length) * 100).toFixed(2);

  return result;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }