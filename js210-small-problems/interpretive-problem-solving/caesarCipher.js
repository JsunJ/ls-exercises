/*

Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.


P: given a string (plaintext) and a number (the key), implement the caesar cipher on the plaintext

input:
- a string (the plaintext)
  - cannot be empty
  - can include any character
  - can include upper or lowercase

output:
- a string (the ciphertext)

rules:
- substitute all characters by the alphabet character located 'key' positions away
- preserve letter case for all letters
- preserve non-letters as-is
- if a letter must be shifted past the end of the alphabet, wrap around to the beginning

E:

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

D:

input:
- string (plaintext)
  - convert to array
- number (integer) (key)

output:
- string (cyphertext)

other:
- array of alphabet letters
  - used for index positions and array methods

A:
- return an empty string if the input string is empty
- return the input string if the input key is 0

- create a string map of the alphabet 'abcdefghijklmnopqrstuvwxyz'
- create a result string (cypherString)

- convert the input string to an array
- loop through the plainTextArray
  - for each character,
    - declare a variable to track the case of the char
    - if the character is non-alphabetical, append the character to the cypherString as-is
    - find the index of the character (case insensitive)
    - if the (charIndex + key > 25),
      - append another alphabet to the alphabet until it is longer than charIndex + key
    - add key to the charIndex to get the shiftedIndex
    - append the plainTextArray character at the shiftedIndex to the cipherString, converting it to the proper case in the process
- return the cipherString

*/

function caesarEncrypt(plaintext, key) {
  if (!plaintext) return '';
  if (key === 0) return plaintext; 

  let cipherText = '';

  plaintext.split('').forEach(char => {
    if (/[^a-z]/gi.test(char)) {
      cipherText += char;
    } else {
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let charCase = /[a-z]/.test(char) ? 'lower' : 'upper';
      let charIndex = alphabet.indexOf(char.toLowerCase());

      if (charIndex + key > 25) {
        while (alphabet.length - 1 < charIndex + key) {
          alphabet += alphabet;
        }
      }

      let shiftedIndex = charIndex + key;
      if (charCase === 'upper') {
        cipherText += alphabet[shiftedIndex].toUpperCase();
      } else {
        cipherText += alphabet[shiftedIndex];
      }
    }
  });

  return cipherText;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"