// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// Write a function that takes a word string as an argument and returns true if
// the word can be spelled using the set of blocks, false otherwise.
// You can consider the letters to be case-insensitive when you apply the rules.

// P
// input: a word (string)
// output: true or false if the word can be spelled using the set of blocks
// rules: each block can only be used once
//        false if letters in the word use the same block

// E
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true

// D
// input: string
// output: boolean
// other: array (blocks)

// A
// 1. declare an array of blocks (letterpairs)
// 2. convert the input to an array of letters and iterate through it
//    1. if the current letter cannot be found in the array of blocks, return false
//    2. remove the block which contains the current letter
// 3. return true

// C
function isBlockWord(word) {
  const BLOCKS = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU',
                  'VI', 'LY', 'ZM'];

  let letterArray = word.toUpperCase().split('');

  for (let i = 0; i < letterArray.length; i++) {
    let currentLetter = letterArray[i];
    let block = BLOCKS.find(elem => elem.includes(currentLetter));

    if (block === undefined) return false;
    BLOCKS.splice(BLOCKS.indexOf(block), 1);
  }
  
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false