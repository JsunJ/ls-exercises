function repeater(string) {
  let newStr = '';
  string.split('').forEach(char => newStr += (char + char));
  return newStr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""