// Write a function that takes a string argument containing one or more words
// and returns a new string containing the words from the string argument. All
// five-or-more letter words should have their letters in reverse order. The
// string argument will consist of only letters and spaces. Words will be
// separated by a single space.

// P
// input: a string containing one or more words
// output: a new string containing the words from the input
// explicit reqs: the output's words longer than 4 characters should have their
//                letters reversed.
//                the input will consist of only letters and spaces.
//                the input's words will be separated by a single space.
// implicit reqs:

// // E
// reverseWords('Professional');             // "lanoisseforP"
// reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
// reverseWords('Launch School');            // "hcnuaL loohcS"

// D
// input: string
// output: string

// A
// 1. define a function named "reverseWords" with a single parameter "str".
// 2. split `str` by whitespace and assign this value to "wordsArray".
// 3. declare a new variable "newWordsArray" initialized to an empty array.
// 4. loop through the words in `wordsArray`.
//    1. check the length of the current word
//    2. if the length is greater than 4, split the world into an array of characters,
//       reverse it, and join it. finally, push this new value to `newWordsArray`.
//    3. otherwise, push the current word to `newWordsArray`.
// 5. join by a single space and return `newWordsArray`.

// C
// function reverseWords(str) {
//   let wordsArray = str.split(' ');
//   let newWordsArray = [];

//   for (let i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i].length > 4) {
//       newWordsArray.push(wordsArray[i].split('').reverse().join(''));
//     } else {
//       newWordsArray.push(wordsArray[i]);
//     }
//   }

//   return newWordsArray.join(' ');
// }

function reverseWords(str) {
  let wordsArray = str.split(' ');
  return wordsArray.map(word => {
    return word.length > 4 ? word.split('').reverse().join('') : word;
  }).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"