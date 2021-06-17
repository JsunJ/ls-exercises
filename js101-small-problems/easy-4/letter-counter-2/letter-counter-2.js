// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size.
// For instance, the word size of "it's" is 3, not 4.

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');                                            // {}

function wordSizes(str) {
  let obj = {};
  let strArray = str.split(' ');
  let filteredWordsArr = filterNonLetters(strArray);

  if (str.length === 0) return obj;

  for (let i = 0; i < filteredWordsArr.length; i++) {
    let charLength = filteredWordsArr[i].length;
    obj[String(charLength)] = 0;
  }

  for (let i = 0; i < filteredWordsArr.length; i++) {
    let charLength = filteredWordsArr[i].length;
    obj[String(charLength)] += 1;
  }

  return obj;
}

function filterNonLetters(arr) {
  let filteredWordsArr = [];

  arr.forEach(word => {
    filteredWordsArr.push(word.replace(/[^a-zA-Z]/g, ''));
  });

  return filteredWordsArr;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}