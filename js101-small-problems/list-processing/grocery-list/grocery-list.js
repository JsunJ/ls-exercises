// Write a function that takes a grocery list in a two-dimensional array and
// returns a one-dimensional array. Each element in the grocery list contains a
// fruit name and a number that represents the desired quantity of that fruit.
// The output array is such that each fruit name appears the number of times
// equal to its desired quantity.

// P
// input: a two-dimensional array grocery list
// output: a one-dimensional array
// explicit reqs: each input element contains a fruit name and number qty
//                the output should contain each fruit name qty number of times
// implicit reqs:

// E
// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// D
// input: two-dimensional array
// output: array

// A
// 1. define a function name "buyFruit" with a single parameter "groceryList".
// 2. declare an "itemList" array []
// 3. loop through the elements in `groceryList`.
//    1. for each element, set a "quanitity" variable to the second inner element.
//    2. push the first inner element to `itemList` `counter` number of times.
// 4. return `itemList`.

// C
function buyFruit(groceryList) {
  let itemList = [];
  groceryList.forEach(elem => {
    let quantity = elem[1];
    while (quantity > 0) {
      itemList.push(elem[0]);
      quantity--;
    }
  });
  return itemList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]