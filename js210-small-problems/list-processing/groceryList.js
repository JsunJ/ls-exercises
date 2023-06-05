function buyFruit(list) {
  let result = [];
  list.forEach(fruit => {
    let count = fruit[1];
    while (count > 0) {
      result.push(fruit[0]);
      count -= 1;
    }
  });
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// function buyFruit(fruitsList) {
//   return fruitsList.map(fruit => repeat(fruit))
//                    .reduce((groceryList, fruit) => groceryList.concat(fruit));
// }

// function repeat(fruit) {
//   const result = [];

//   for (let i = 0; i < fruit[1]; i += 1) {
//     result.push(fruit[0]);
//   }

//   return result;
// }