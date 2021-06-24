// Write a function that takes an array as an argument and reverses its elements
// in place. That is, mutate the Array passed into this method. The return
// value should be the same Array object.

// P
// input: an array
// output: the same array object with its elements in reverse order
// explicit reqs: mutate the input
// implicit reqs:

// E
// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

// D
// input: array
// output: array

// A
// 1. define a function named "reverse" with one parameter "arr".
// 2. declare a variable "tempArr" initialized to an empty array.
// 3. loop backwards through the elements of `arr`.
//    1. push the current element to `tempArr`.
// 4. loop through the elements of `tempArr`.
//    1. reassign the element at the corresponding index of `arr` to the current
//       element of `tempArr`.

// C
function reverse(arr) {
  let tempArr = [];
  let index = arr.length - 1;

  while (index >= 0) {
    tempArr.push(arr[index]);
    index -= 1;
  }

  for (let i = 0; i < tempArr.length; i++) {
    arr[i] = tempArr[i];
  }

  return arr;
}

// function reverse(array) {
//   let leftIndex = 0;
//   let rightIndex = array.length - 1;

//   while (leftIndex < array.length / 2) {
//     [array[leftIndex], array[rightIndex]] =
//       [array[rightIndex], array[leftIndex]];
//     leftIndex += 1;
//     rightIndex -= 1;
//   }
//   return array;
// }

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true