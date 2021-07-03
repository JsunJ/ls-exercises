// Write a function that takes a sentence string as an argument and returns that
// string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.

// P
// input: a sentence string
// output: a new sentence string with every "number word" converted to its digit
// explicit reqs:
// implicit reqs: number words zero through nine

// E
// wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// D
// input: string
// output: string
// lookup table: object

// A
// 1. define a function named "wordToDigit" with one parameter "sentence".
// 2. build a lookup table object consisting of the 10 number words as keys and their
//    corresponding digits as values "table".
// 3. split `sentence` into an array of words "wordsArray"
// 4. loop through this array
//    1. if the current word does not exist in the lookup table, push it to a new array "resultArray".
//    2. if it does, push its counterpart to the new array
// 5. join and return `resultArray`.

// C
function wordToDigit(sentence) {
  const TABLE = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  }

  let wordsArray = sentence.split(' ');
  let resultArray = [];

  for (let i = 0; i < wordsArray.length; i++) {
    let currentWord = wordsArray[i];

    if (Object.keys(TABLE).includes(currentWord.slice(0, currentWord.length - 1))) {
      currentWord = currentWord.slice(0, currentWord.length - 1);
      resultArray.push(TABLE[currentWord] + '.');
      continue;
    }

    if (Object.keys(TABLE).includes(currentWord)) {
      resultArray.push(TABLE[currentWord]);
    } else {
      resultArray.push(currentWord);
    }
  }

  return resultArray.join(' ');
}

// const NUM_WORDS = {
//   zero:  0,
//   one:   1,
//   two:   2,
//   three: 3,
//   four:  4,
//   five:  5,
//   six:   6,
//   seven: 7,
//   eight: 8,
//   nine:  9,
// };

// function wordToDigit(sentence) {
//   Object.keys(NUM_WORDS).forEach(word => {
//     let regex = new RegExp(word, 'g');
//     sentence = sentence.replace(regex, NUM_WORDS[word]);
//   });

//   return sentence;
// }

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."