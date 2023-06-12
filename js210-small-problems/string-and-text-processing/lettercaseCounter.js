function letterCaseCount(string) {
  return {
    lowercase: lowercaseCount(string),
    uppercase: uppercaseCount(string),
    neither: nonAlphabeticalCount(string),
  };
}

function lowercaseCount(string) {
  if (string.match(/[a-z]/g)) {
    return string.match(/[a-z]/g).length;
  } else {
    return 0;
  }
}

function uppercaseCount(string) {
  if (string.match(/[A-Z]/g)) {
    return string.match(/[A-Z]/g).length;
  } else {
    return 0;
  }
}

function nonAlphabeticalCount(string) {
  if (string.match(/[^a-z]/gi)) {
    return string.match(/[^a-z]/gi).length;
  } else {
    return 0;
  }
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// function letterCaseCount(string) {
//   const lowerArray = string.match(/[a-z]/g) || [];
//   const upperArray = string.match(/[A-Z]/g) || [];
//   const neitherArray = string.match(/[^a-z]/gi) || [];

//   return {
//     lowercase: lowerArray.length,
//     uppercase: upperArray.length,
//     neither: neitherArray.length,
//   };
// }