function multiplyAllPairs (arr1, arr2) {
  return arr1.map(element1 => {
    return arr2.map(element2 => element1 * element2);
  }).flat().sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
// [2, 4, 4, 6, 8, 8, 12, 16]

// function multiplyAllPairs(array1, array2) {
//   const result = [];

//   array1.forEach(number1 => {
//     array2.forEach(number2 => {
//       result.push(number1 * number2);
//     });
//   });

//   return result.sort((a, b) => a - b);
// }