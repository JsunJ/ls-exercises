function doubleConsonants(str) {
  let newStr = '';

  str.split('').forEach(char => {
    if (isConsonant(char)) {
      newStr += (char + char);
    } else {
      newStr += char;
    }
  })

  return newStr;
}

function isConsonant(char) {
  return /[CDFGHJKLMNPQRSTVWXYZ]/i.test(char);
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""