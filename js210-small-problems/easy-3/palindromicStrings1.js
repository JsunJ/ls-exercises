function isPalindrome(str) {
  let reveresedStr = str.split('')
                        .reverse()
                        .join('');

  return str === reveresedStr;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true