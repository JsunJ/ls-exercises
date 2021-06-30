// Write a function that takes a string as an argument and returns that string
// with the first character of every word capitalized and all subsequent
// characters in lowercase.

// P
// input: a string
// output: a string with the first character of every word capitalized and
//         all other characters lowercase
// explicit reqs:
// implicit reqs:

// E
// wordCap('four score and seven');       // "Four Score And Seven"
// wordCap('the javaScript language');    // "The Javascript Language"
// wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

// D
// input: string
// output: string

// A
// 1. define a function named "wordCap" with one parameter "str".
// 2. declare an empty new "newWordsArr".
// 3. set `str` to lowercase.
// 4. split `str` by word. "wordsArr"
// 5. loop through this new array of words
//    1. declare a variable "currentWord" to hold the current word
//    2. access and capitalize the first character of `currentWord`, reassign
//    3. add `currentWord` to `newWordsArr`.
// 6. join `newWordsArr` by a single space and return it.

// C
function wordCap(str) {
  let capWordsArr = [];
  let wordsArr = str.toLowerCase().split(' ');

  for (let i = 0; i < wordsArr.length; i++) {
    capWordsArr.push(wordsArr[i].slice(0, 1).toUpperCase() + wordsArr[i].slice(1));
  }

  return capWordsArr.join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'