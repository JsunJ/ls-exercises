function crunch(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === string[i + 1]) {
      continue;
    } else {
      result += string[i];
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

// function crunch(string) {
//   return string.replace(/(.)\1+/g, '$1');
// }