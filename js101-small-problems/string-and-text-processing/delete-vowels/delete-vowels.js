// Write a function that takes an array of strings and returns an array of the
// same string values, but with all vowels (a, e, i, o, u) removed.

// P
// input: array of strings
// output: new array consisting of the same elements
//         no vowel elements
// explicit reqs: the output array should have no vowel elements
// implicit reqs:

// E
// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// D
// input: array (of strings)
// output: array (of strings)

// A
// 1. define a function named "removeVowels" with one parameter "inputArr".
// 2. declare a new array "resultArr".
// 3. loop through the elements of `inputArr`.
//    1. define a regex for (non-vowels)
//    2. declare an empty string "filteredString".
//    3. loop through the characters of the current element (the string)
//        1. add the non-vowel characters to `filteredString`.
//    4. push `filteredString` to `resultArr`.
// 5. return `resultArr`.

// C
function removeVowels(inputArr) {
  let resultArr = [];
  let regex = /[aeiou]/i;

  inputArr.forEach(elem => {
    let filteredString = '';
    for (let i = 0; i < elem.length; i++) {
      if (regex.test([elem[i]])) continue;
      filteredString += elem[i];
    }
    resultArr.push(filteredString);
  });
  return resultArr;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]