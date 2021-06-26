// Write a function that returns a list of all substrings of a string.
// Order the returned list by where in the string the substring begins.
// This means that all substrings that start at index position 0 should come
// first, then all substrings that start at index position 1, and so on.
// Since multiple substrings will occur at each position, return the substrings
// at a given index from shortest to longest.

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

console.log(substrings('abcde'));