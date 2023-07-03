// case-insensitive
// ignore all non-alphanumeric

function isRealPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]+/g, '');

  return isPalindrome(str);
}

function isPalindrome(str) {
  let reveresedStr = str.split('')
                        .reverse()
                        .join('');

  return str === reveresedStr;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false