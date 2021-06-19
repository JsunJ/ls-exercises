// Write a function that takes two arrays as arguments and returns an array
// containing the union of the values from the two. There should be no
// duplication of values in the returned array, even if there are duplicates
// in the original arrays. You may assume that both arguments will always be
// arrays.

// P
// input: two arrays
// output: an array containing the values of both arrays, but with no duplication
// explicit reqs: the input will always be two arrays
// implicit reqs:

// E
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// D
// input: arrays
// output: array

// A
// 1. define a function named "union" with two parameters "arrOne" "arrTwo".
// 2. declare a variable initialized to an empty array "combinedArr".
// 3. declare a variable initialized to an empty array "resultArr".
// 4. concat `arrTwo` to `arrOne` and assign this to `combinedArr`.
// 5. loop through the elements of `combinedArr`.
//    1. if the current element does not exist in `resultArr`, push it
// 6. sort `resultArr` from lowest to highest.
// 7. return `resultArr`.

// C
function union(arrOne, arrTwo) {
  let combinedArr = arrOne.concat(arrTwo);
  let resultArr = [];

  for (let i = 0; i < combinedArr.length; i++) {
    if (!resultArr.includes(combinedArr[i])) {
      resultArr.push(combinedArr[i]);
    }
  }

  return resultArr.sort();
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 6], [5, 6, 9]));    // [1, 3, 5, 6, 9]