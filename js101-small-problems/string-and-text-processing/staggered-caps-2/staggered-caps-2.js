// Modify the function from the previous exercise so it ignores non-alphabetic
// characters when determining whether it should uppercase or lowercase each
// letter. The non-alphabetic characters should still be included in the return
// value; they just don't count when toggling the desired case.

function staggeredCase(str, countOnlyAlphabetic = true) {
  let charArr = str.toLowerCase().split('');
  let resultStr = '';
  let regex = /[a-zA-Z]/;
  let toggleCase = true;

  for (let i = 0; i < charArr.length; i++) {
    let currentChar = charArr[i];

    if (regex.test(currentChar) === false && countOnlyAlphabetic) {
      resultStr += currentChar;
      continue;
    }

    if (toggleCase) {
      resultStr += currentChar.toUpperCase();
      toggleCase = false;
    } else {
      resultStr += currentChar;
      toggleCase = true;
    }
  }

  return resultStr;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);