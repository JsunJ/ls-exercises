function isPalindromicNumber(int) {
  let reversedInt = parseInt(int.toString()
                       .split('')
                       .reverse()
                       .join(''), 10);

  return int === reversedInt;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true