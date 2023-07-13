/*

input:
- string
  - empty?
  - all chars?

output:
- an object
  - property1: percent of lowercase chars
  - property2: precent of uppercase chars
  - property3: percent of chars neither (nonAlpha)

rules:
- input will always contain at least one char (alpha or non alpha)

E:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

D:

input:
- string
  - match method

output:
- object

A:

- initialize the result object
- count the length of (match lowercase)
- count the length of (match uppercase)
- count the length of (match non-alphabetical)
- compute the percentage of each count and assign to the corresponding property in the result (format)
- return the result

*/

function letterPercentages(string) {
  let result = {};
  let lowercaseCount = string.match(/[a-z]/g) ?
                       string.match(/[a-z]/g).length / string.length : "0.00";
  let uppercaseCount = string.match(/[A-Z]/g) ?
                       string.match(/[A-Z]/g).length / string.length : "0.00";
  let neitherCount = string.match(/[^a-z]/ig) ?
                       string.match(/[^a-z]/ig).length / string.length : "0.00";

  result.lowercase = (lowercaseCount * 100).toFixed(2);
  result.uppercase = (uppercaseCount * 100).toFixed(2);
  result.neither = (neitherCount * 100).toFixed(2);

  return result;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


// function letterPercentages(string) {
//   const count = string.length;
//   return {
//     lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
//     uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
//     neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
//   };
// }