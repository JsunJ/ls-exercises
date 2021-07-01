// Write a function that takes a string as an argument and returns an array that
// contains every word from the string, with each word followed by a space and
// the word's length. If the argument is an empty string or if no argument is
// passed, the function should return an empty array.

// P
// input: string
// output: an array containing every word from the input
// explicit reqs: each word in the output should be followed by a space and
//                the word's length.
//                if the input is an empty string or not supplied, the output
//                should be an empty array
// implicit reqs:

// E
// wordLengths('cow sheep chicken');
// // ["cow 3", "sheep 5", "chicken 7"]

// wordLengths('baseball hot dogs and apple pie');
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// wordLengths("It ain't easy, is it?");
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// wordLengths('Supercalifragilisticexpialidocious');
// // ["Supercalifragilisticexpialidocious 34"]

// wordLengths('');      // []
// wordLengths();        // []

// D
// input: string
// output: array (of strings)

// A
// 1. define a function named "wordLengths" with one parameter "str".
// 2. split the input string into an array of words
// 3. map this array of words to a new array containing each word plus a space and its length
// 4. return the new array

// C
function wordLengths(str) {
  if (!str) return [];
  
  let wordArr = str.split(' ');
  return wordArr.map(elem => {
    return elem + ' ' + elem.length;
  });
}


console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []