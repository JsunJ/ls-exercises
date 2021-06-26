// Write a function that returns a list of all palindromic substrings of a
// string. That is, each substring must consist of a sequence of characters that
// reads the same forward and backward. The substrings in the returned list
// should be sorted by their order of appearance in the input string.
// Duplicate substrings should be included multiple times.

function isPalindrome(str) {
  let strArray = str.split('');
  let reversedStrArray = strArray.slice().reverse();

  if (str.length === 1) return false;
  return (strArray.join('') === reversedStrArray.join(''));
}

function leadingSubstrings(str) {
  let charArr = str.split('');
  let substrArr = charArr.map((_, idx) => {
    return str.slice(0, idx + 1)
  });
  return substrArr;
}

function substrings(str) {
  let charArr = str.split('');
  let substrArr = charArr.map((_, idx) => {
    let strSection = str.slice(idx);
    return leadingSubstrings(strSection);
  });
  return substrArr.flat();
}

function palindromes(str) {
  let substrArr = substrings(str);
  let palindromeArr = substrArr.filter(substr => {
    return isPalindrome(substr);
  });
  return palindromeArr;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]