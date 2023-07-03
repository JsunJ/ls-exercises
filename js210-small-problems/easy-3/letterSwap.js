function swap(str) {
  if (str.length < 2) return str;

  let words = str.split(' ');
  return words.map(word => {
    return swapWord(word);
  }).join(' ');
}

function swapWord(word) {
  let letterArr = word.split('');
  return letterArr.map((char, index) => {
    if (index === 0) {
      return letterArr[letterArr.length - 1];
    } else if (index === letterArr.length - 1) {
      return letterArr[0]
    } else {
      return char;
    }
  }).join('');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"