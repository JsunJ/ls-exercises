/*

The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').


P: given some plaintext (alphabetic) and a keyword (alphabetic), implement the Vigenere Cipher on
   the plaintext

input:
- plaintext
  - all chars possible
  - not empty?
  - case-sensitive

output:
- ciphertext
  - the plaintext after applying the rules of the Vigenere Cipher

rules:
- preserve case
- non-alphabetical characters are preserved as-is
- the keyword is case-insensitive for the purposes of applying the Vigenere Cipher

- take the shift value of each keyword character and use it in a Caesar Cipher to 
  shift the characters of the plaintext
  - a = shift value 0
    b = 1
    c = 2
    ...
    y = 24
    z = 25

E:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

P --> m (shift 13) --> B

console.log(vigenereEncrypt('Pineapples don't go on pizzas!', 'me')) // Bmnxmtpeqw dhz'x gh ar pbldal!

D:

input:
- string (plaintext)
  - all chars possible

- string (keyword)
  - alphabetical only

output:
- string (ciphertext)
  - case preserved
  - non-alphabetical chars preserved

other:
- string (alphabet map for finding indexes)

A:

- if either input is empty return ''
- create an alphabet map string
- create a new string of only alphabetical chars from the original plaintext
- create a ciphertext result string
- convert the keyword to lowercase
- create a variable to track indexes of the keyword = 0
- for each char in the alphaPlaintext,
  - if keywordIndex > keyword length, reset it to 0
  - find the ceaser cipher shifted value of the (char) and the (alphabet index mapping of the keyword char at the same position)
    i.e. - (char: 'P' at plaintext position 0), (keyword char: 'm' at keyword position 0 = alphabet index mapping of 13), shift value is 13 --> apply shift value of 13 to 'P' to get 'B'
  - append the ceaser cipher shifted value of char to the result string
  - increment keywordIndex by 1

- splice original non-letters back into the result (helper)
  - loop through the original plaintext string
    - if the current char is non-alphabetical,
      - splice it at its current index into the result string
  - return the result string

- return the result string ciphertext

*/

function vigenereEncrypt(plaintext, keyword) {
  if (!plaintext || !keyword) return '';

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabeticalPlaintext = plaintext.replace(/[^a-z]/ig, '').split('');
  let ciphertext = '';
  keyword = keyword.toLowerCase();
  let keywordIndex = 0;

  alphabeticalPlaintext.forEach(char => {
    if (keywordIndex > keyword.length - 1) keywordIndex = 0;
    let shiftValue = alphabet.indexOf(keyword[keywordIndex]);
    ciphertext += caesarEncrypt(char, shiftValue);
    keywordIndex += 1;
  });

  ciphertext = insertNonLetters(ciphertext, plaintext);
  return ciphertext;
}

function insertNonLetters(targetStr, originalStr) {
  let targetArr = targetStr.split('');
  for (let i = 0; i < originalStr.length; i += 1) {
    if (/[^a-z]/i.test(originalStr[i])) {
      targetArr.splice(i, 0, originalStr[i]);
    }
  }

  return targetArr.join('');
}

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

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'A')); // Pineapples don't go on pizzas!
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'Aa')); // Pineapples don't go on pizzas!
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'cab')); // Riogaqrlfu dpp't hq oo riabat!
console.log(vigenereEncrypt("Dog", 'Rabbit')); // Uoh