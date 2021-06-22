// Write a function that counts the number of occurrences of each element in a
// given array. Once counted, log each element alongside the number of
// occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

// P
// input: an array of elements
// output: each element of the input including how many occurrences it has
// explicit reqs: the elements of the input are case sensitive
// implicit reqs:

// E
// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
// 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// D
// input: array
// output: string and number

// A
// 1. define a function named "countOccurrences" with one parameter "arr".
// 2. declare a variable "list" initialized to an empty object.
// 3. loop through the elements of `arr`.
//    1. if the current element does not exist in `list`, add it as a key with
//       a value of 1.
//    2. if it does, increase it's value by 1.
// 4. loop through the keys of `obj`.
//    1. log to the console the current key and its value.

// C
function countOccurrences(arr) {
  let list = {};
  for (let i = 0; i < arr.length; i++) {
    if (!list[arr[i]]) {
      list[arr[i]] = 1;
    } else {
      list[arr[i]] += 1;
    }
  }
  return list;
}

function displayOccurrences(arr) {
  let countList = countOccurrences(arr);
  
  for (let i = 0; i < Object.keys(countList).length; i++) {
    console.log(`${Object.keys(countList)[i]} => ${Object.values(countList)[i]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

displayOccurrences(vehicles);