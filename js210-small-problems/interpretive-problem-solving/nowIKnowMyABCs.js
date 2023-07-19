/*

A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

P: given a word string, determine if the word can be spelled using the set of blocks above

input:
- a word (string)
  - cannot be empty?
  - non-word chars allowed?

output:
- true or false

rules:
- set of blocks determines what words can be made
- block:
  - 2 letter pair
  - valid word cannot use both letters in any pair (U and H)
  - valid word cannot use the same block twice (no duplicate letters)
  - consider the input and block letters case-insenitive

E:

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord(' jest');       // false
isBlockWord('');       // false

D:

input:
- string
  - convert to lowercase

output:
- boolean

other:
- array of "blocks" --> [[b, o], [x, k], [d, q], ...]
  - blocks are arrays of letter pairs --> [b, o]

A:
- return false if the input string is empty or contains non-letters
- convert the input string to lowercase
- create a list of all blocks
- create a "matched" list to store a value representing which blocks are used already
- loop through the input chars
  - loop through the list of blocks
    - if the current char is in the current block,
      - if the current block index exists in the matched list,
        - return false
      - else
        - add the index of the current block to the matched list
- return true


body
b --> index 0
o --> index 0 --> false

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

*/

function isBlockWord(str) {
  if (!str || /[^a-z]/gi.test(str)) return false;
  const spellingBlocks = [['b', 'o'], ['x', 'k'], ['d', 'q'], ['c', 'p'], ['n', 'a'],
                          ['g', 't'], ['r', 'e'], ['f', 's'], ['j', 'w'], ['h', 'u'],
                          ['v', 'i'], ['l', 'y'], ['z', 'm']];
  str = str.toLowerCase();
  let usedBlocks = [];

  for (let strIdx = 0; strIdx < str.length; strIdx += 1) {
    let currentLetter = str[strIdx];
    for (let blocksIdx = 0; blocksIdx < spellingBlocks.length; blocksIdx += 1) {
      let currentBlock = spellingBlocks[blocksIdx];
      if (currentBlock.includes(currentLetter)) {
        if (usedBlocks.includes(blocksIdx)) {
          return false;
        } else {
          usedBlocks.push(blocksIdx);
        }
      }
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(' jest'));       // false
console.log(isBlockWord(''));       // false