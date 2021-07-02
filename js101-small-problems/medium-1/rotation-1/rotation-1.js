// Write a function that rotates an array by moving the first element to the end
// of the array. Do not modify the original array.

// P
// input: an array
// output: a new array consisting of the same elements, with the first input
//         element at the end
// explicit reqs: if the input is not an array return undefined.
//                if the input is an empty array return an empty array.
// implicit reqs:

// E
// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

// D
// input: array
// output: new array

// A
// 1. define "rotateArray" function with one parameter "arr".
// 2. declare new empty array "resultArr".
// 3. determine if `arr` is an array
//    1. return undefined if it is not
// 4. determine if `arr` is empty
//    1. return `resultArr` if it is
// 5. take the second element through the last element of `arr` and add it
//    together with the first element of `arr`, then assign this value to `resultArr`.
// 6. return `resultArr`.

// C
function rotateArray(arr) {
  let resultArr = [];

  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return resultArr;

  resultArr = arr.slice(1).concat(arr.slice(0, 1));
  return resultArr;
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]