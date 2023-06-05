function leadingSubstrings(string) {
  return string.split('').map((letter, index) => {
    return string.slice(0, index + 1);
  });
}

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function substrings(string) {
  let trailingSubstringArray = string.split('').map((letter, index) => {
    return string.slice(0 + index);
  });

  // [ 'abcde', 'bcde', 'cde', 'de', 'e' ]

  return trailingSubstringArray.map(string => leadingSubstrings(string)).flat();
}

// console.log(substrings('abcde'));
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

function isPalindrome(string) {
  if (string.length === 1) return false;
  return string.replace(/\s+/g, '').split('').reverse().join('') === string;
}

function palindromes(string) {
  let substrs = substrings(string);
  let palindromeArray = [];

  substrs.forEach(substr => {
    if (isPalindrome(substr)) palindromeArray.push(substr);
  });

  return palindromeArray;
}

console.log(palindromes('hello-madam-did-madam-goodbye'));
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// function isPalindrome(word) {
//   return word.length > 1 && word === word.split('').reverse().join('');
// }

// function palindromes(string) {
//   return substrings(string).filter(isPalindrome);
// }