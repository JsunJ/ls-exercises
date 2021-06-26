// Write a function that takes an array of numbers and returns the sum of the
// sums of each leading subsequence in that array. Examine the examples to see
// what we mean. You may assume that the array always contains at least one
// number.

// P
// input: an array of numbers
// output: the sum of (the sums of each leading subsequence of numbers in the input)
// explicit reqs: the input always contains at least one number
// implicit reqs:

// E
// sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35

// D
// input: array of numbers
// output: number
// leading subsequences: arrays of numbers

// A
// 1. define a function named "sumOfSums" with one parameter "inputArr".
// 2. find all leading subsequences of `inputArr`. "leadingSubsequences"
// 3. find the sums of each subsequence
// 4. add the sums together and return it

// C
function sumOfSums(inputArr) {
  let leadingSubsequences = inputArr.map((_, idx) =>{
    return inputArr.slice(0, idx + 1);
  });

  let subsequenceSums = [];
  for (let i = 0; i < leadingSubsequences.length; i++) {
    let sum = 0;
    for (let j = 0; j < leadingSubsequences[i].length; j++) {
      sum += leadingSubsequences[i][j];
    }
    subsequenceSums.push(sum);
  }

  return subsequenceSums.reduce((sum, num) => {
    return sum + num;
  });
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35