// Write a function that takes a string consisting of zero or more space
// separated words and returns an object that shows the number of words of
// different sizes.

// P
// input: a string consisting of 0 or more space-separated words
// output: an object that shows the number of words of different sizes

// E
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}

// D
// input: string
// output: object

// A
// 1. define a function named "wordSizes" with one parameter "str".
// 2. declare a variable "obj" initialized to an empty object `{}`.
// 3. declare and initialize "strArray" to `str` split by whitespace into words
// 4. loop through the elements of `strArray`.
//    1. declare and initialize "charLength" to the length of the current element.
//    2. add the value of `charLength` as a key to obj with its value pair being 0.
// 5. loop through the elements of `strArray` again.
//    1. declare and initialize "charLength" to the length of the current element.
//    2. increment `charLength`'s corresponding key value pair in `obj` by 1.
// 6. return `obj`.

function wordSizes(str) {
  let obj = {};
  let strArray = str.split(' ');

  if (str.length === 0) return obj;

  // build object keys
  for (let i = 0; i < strArray.length; i++) {
    let charLength = strArray[i].length;
    obj[String(charLength)] = 0;
  }

  // build object values
  for (let i = 0; i < strArray.length; i++) {
    let charLength = strArray[i].length;
    obj[String(charLength)] += 1;
  }

  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}