// Given an array of integers `nums`, sorted in ascending order (where elements
// are equal to or increase as you move through the array), your task is to
// implement a function `reduceToUnique`. This function should modify the array
// in-place ensuring that it starts with a sequence of unique elements each
// following their original order in the array. After these modifications,
// return the count of these unique elements.

/*

P: take an array of integers sorted in ascending order, and modify the array
  so that an ascending sequence of unique elements comes first while also
  following their original order in the array, afterwards return the count of
  the unique elements in the sequence

Inputs:
- array of integers `nums`
  - not empty
  - can contain only 1 element
  - can contain `0`
  - can contain negative integers

Outputs:
- integer (the count of unique elements)

Rules:
- input contains integers only
- mutate the input according to the problem
- return the count of unique elements in the starting sequence
- the order of the non-unique elements following the starting sequence does not
  matter
- sequence = all unique integers sorted in ascending order (same order as
  original input)

E:

// [3, 3, 5, 7, 7, 8] --> [3, 5, 7, 8, ...] (4)
// [1, 1, 2, 2, 2, 3, 4, 4, 5] --> [1, 2, 3, 4, 5, ...] (5)
// [0] --> [0] (1)
// [-5, -3, -3, -1, 0, 0, 0, 1] --> [-5, -3, -1, 0, 1, ...] (5)
// [6, 6, 6, 6, 6, 6, 6] --> [6, ...] (1)

D:

Inputs:
- array (asc sorted integers)

Outputs:
- integer

Other:
-

A:

- initialize anchor pointer to 0
- initialize runner pointer to 1
- loop through the array using the runner pointer
  - if runner val is different from anchor val,
    - increment anchor
    - assign runner val to anchor index
- return anchor index + 1

*/

function reduceToUnique(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  let anchor = 0;
  let runner = 1;

  while (runner < nums.length) {
    if (nums[runner] !== nums[anchor]) {
      anchor += 1;
      nums[anchor] = nums[runner];
    }

    runner += 1;
  }

  return anchor + 1;
}

function testReduceToUnique(array, expectedLength) {
  const originalReference = array;
  const resultLength = reduceToUnique(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array.slice(0, expectedLength).every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testReduceToUnique([3, 3, 5, 7, 7, 8], 4));
console.log(testReduceToUnique([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
console.log(testReduceToUnique([0], 1));
console.log(testReduceToUnique([-5, -3, -3, -1, 0, 0, 0, 1], 5));
console.log(testReduceToUnique([6, 6, 6, 6, 6, 6, 6], 1));

// All tests should log true.