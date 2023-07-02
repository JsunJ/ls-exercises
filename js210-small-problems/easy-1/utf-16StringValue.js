function utf16Value(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0