function leadingSubsequences(arr) {
  return arr.map((num, index) => {
    return arr.slice(0, index + 1);
  });
}

function sumOfSums(arr) {
  let leadingSubs = leadingSubsequences(arr);
  return leadingSubs.flat().reduce((sum, num) => sum + num);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

// function sumOfSums(numbers) {
//   return numbers.map((number, idx) => numbers.slice(0, idx + 1)
//                                              .reduce((sum, value) => sum + value))
//                                              .reduce((sum, value) => sum + value);
// }