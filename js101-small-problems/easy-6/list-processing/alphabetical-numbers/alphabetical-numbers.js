// Write a function that takes an array of integers between 0 and 19 and returns
// an array of those integers sorted based on the English word for each number.

const twilio = require("twilio");

// P
// input: an array of integers between 0 and 19 ( [0, 1, 2... 18, 19] )
// output: new array sorted based on the english word for each number
// explicit reqs:
// implicit reqs:

// E
// alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
//   [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// D
// input: array
// output: array
// other: object (lookup table)

// A
// 1. define a function named "alphabeticNumberSort" with one parameter "numArr".
// 2. define a lookup table object consisting of the numbers as keys and their
//    corresponding english words as values. "table"
// 3. build a new array from `numArr` with each element being the corresponding value
//    from `table`. "WordArr"
// 4. sort this `WordArr` in ascending order by the element UTF-16 code points
// 5. build a new array from `WordArr` with each element being the corresponding
//    key from the `table` "sortedNumArr".
// 6. return `sortedNumArr`.

// C
function alphabeticNumberSort(numArr) {
  const TABLE = {
    0: 'zero',       1: 'one',
    2: 'two',        3: 'three',
    4: 'four',       5: 'five',
    6: 'six',        7: 'seven',
    8: 'eight',      9: 'nine',
    10: 'ten',      11: 'eleven',
    12: 'twelve',   13: 'thirteen',
    14: 'fourteen', 15: 'fifteen',
    16: 'sixteen',  17: 'seventeen',
    18: 'eighteen', 19: 'nineteen'
  };

  let wordArr = numArr.map(num => TABLE[num]);
  let sortedWordArr = wordArr.sort();

  let sortedNumArr = sortedWordArr.map(word =>{
    return Object.keys(TABLE).find(key => TABLE[key] === word);
  });
  return sortedNumArr;
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]