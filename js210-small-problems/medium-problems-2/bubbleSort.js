function bubbleSort(arr) {
  let swapped = false;

  for (let i = 0; i < arr.length - 1; i += 1) {
    let pair = [arr[i], arr[i + 1]];
    if (pair[0] > pair[1]) {
      arr.splice(i, 2, pair[1], pair[0]);
      swapped = true;
    }
  }

  if (swapped === true) {
    return bubbleSort(arr);
  } else {
    return arr;
  }
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]