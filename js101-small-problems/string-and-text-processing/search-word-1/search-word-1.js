// Write a function that takes two arguments, a word and a string of text, and
// returns an integer representing the number of times the word appears in the text.
// You may assume that the word and text inputs will always be provided, and
// that all word breaks are spaces. Thus, some words will include punctuation
// such as periods and commas.

// P
// input: a word and a string of text
// output: an integer showing how many times the word appears in the input text
// explicit reqs: both inputs will always be provided
//                words are always seperated by a space
// implicit reqs:

// E
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// searchWord('sed', text);      // 3

// D
// input: string (word), string (text)
// output: number

// A
// 1. define a function named "searchWord" with two parameters, "word" and "text".
// 2. declare a count variable
// 3. replace all non alpha characters in `text` with nothing.
// 4. convert to lowercase and split `text` into an array of its words (by whitespace)
// 5. loop through this array
//    1. increment `count` for each word that equals `word`
// 6. return `count`.

// C
function searchWord(word, text) {
  let count = 0;
  text = text.replace(/[^a-z ]/gi, '');
  let wordArr = text.toLowerCase().split(' ');

  wordArr.forEach(currentWord => {
    if (currentWord === word.toLowerCase()) count += 1;
  });

  return count;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // 3