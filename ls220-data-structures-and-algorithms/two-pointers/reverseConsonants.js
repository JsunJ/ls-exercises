// Given a string str, reverse only all the consonants
// in the string and return it. Consonants are all
// alphabetic characters except for the vowels 'a', 'e',
// 'i', 'o', and 'u', which can appear in both lower and
// upper cases. The consonants can appear more than once
// in the string.

/*

P: take a string and reverse the consonants

Inputs:
- string `str`
  - can be empty
  - can have repeated letters
  - can have uppercase/lowercase letters
  - only letters (alphabetical)

Outputs:
- string (with consonants reversed)

Rules:
- consonants = alphabetical characters EXCEPT 'a', 'e',
  'i', 'o', and 'u'
- consonants can appear more than once ('ll')
- consonants can be lowercase or uppercase
- maintain the case of consonants when reversing
- reverse? swap positions

E:

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("hello") === "lelho");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

D:

Inputs:
- string (split into array)

Outputs:
- string (join from array)

Other:
- string (`aeiou`), used to check against

A:

- create a vowel string to check characters against
- split input into an array
- initialize start pointer at index 0
- initialize end pointer at str length - 1
  - loop through array until start and end are the same
    - check if both indexes point to consonants, swap if so and increment the start + decrement the end
    - if not, continue the loop and increment/decrement the start/end on continuation
- join and return array

*/

const isVowel = char => {
  return `aeiou`.includes(char.toLowerCase());
};

function reverseConsonants(str) {
  let chars = str.split('');
  let start = 0;
  let end = chars.length - 1;

  while (start < end) {
    if (isVowel(chars[start])) {
      start += 1;
      continue;
    }

    if (isVowel(chars[end])) {
      end -= 1;
      continue;
    }

    [chars[start], chars[end]] = [chars[end], chars[start]];
    start += 1;
    end -= 1;
  }

  return chars.join('');
}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("hello") === "lelho");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");