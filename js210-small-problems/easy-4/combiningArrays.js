function union(arr1, arr2) {
  let newArr = [];

  arr1.forEach(elem => newArr.push(elem));

  arr2.forEach(elem => {
    if (!arr1.includes(elem)) {
      newArr.push(elem);
    }
  });

  return newArr.sort();
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]