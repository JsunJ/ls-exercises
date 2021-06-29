// Write a function that returns true or false based on whether or not an
// inventory item is available. As before, the function takes two arguments: an
// inventory item and a list of transactions. The function should return true
// only if the sum of the quantity values of the item's transactions is greater
// than zero. Notice there is a movement property in each transaction object.
// A movement value of 'out' will decrease the item's quantity.

// P
// input: an invetory item id (number) and a list of transactions (object)
// output: true or false if the sum of (quantity values of the id's transactions)
//         is greater than zero
// explicit reqs:
// implicit reqs:

// E
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// isItemAvailable(101, transactions);     // false
// isItemAvailable(103, transactions);     // false
// isItemAvailable(105, transactions);     // true

// D
// input: number
//        array of objects
// output: boolean

// A
// 1. define a function named "isItemAvailable" with two parameters, "itemID" and "transactionsList".
// 2. 

// C
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemID, transactionList) {
  return transactionList.filter(elem => {
    return elem['id'] === itemID;
  });
};

function isItemAvailable(itemID, transactionList) {
  let itemTransactionList = transactionsFor(itemID, transactionList);
  let itemQuantity = 0;
  itemTransactionList.forEach(transaction => {
    if (transaction.movement === 'in') {
      itemQuantity += transaction.quantity;
    } else if (transaction.movement === 'out') {
      itemQuantity -= transaction.quantity;
    }
  });
  return itemQuantity > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true