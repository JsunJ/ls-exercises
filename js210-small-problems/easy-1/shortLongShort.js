function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return ''.concat(string2, string1, string2);
  } else {
    return ''.concat(string1, string2, string1);
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"