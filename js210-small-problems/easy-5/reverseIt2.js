function reverseWords(str) {
  let result = [];
  let wordsArr = str.split(' ');
  wordsArr.forEach(word => {
    if (word.length >= 5) {
      result.push(word.split('').reverse().join(''));
    } else {
      result.push(word);
    }
  })

  return result.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"