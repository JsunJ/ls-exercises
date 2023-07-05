function interleave(arr1, arr2) {
  let newArr = [];

  arr1.forEach((elem, index) => {
    newArr.push(elem, arr2[index]);
  });

  return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]