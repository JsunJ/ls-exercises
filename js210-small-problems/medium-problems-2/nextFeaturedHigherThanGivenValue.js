/*

P: given an integer, find the next 'featured' number greater than the integer

input:
- number (integer)

output:
- number (integer)
- "There is no possible number that fulfills those requirements." (if nothing larger)
  - largest possible = 9876543201

E:

featured(0);            // 7
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

D:

input:
- number (integer) (can be 0)

output:
- number (integer)
- string if given max possible

other:
- array of input digits to check occurrences

A:

- return the error string if the input = 9876543201
- loop from the (input + 1) to 9876543201, incrementing up by 1
  - check if the current iteration is a featuredNum
    - return the current iteration # if so

helper function: isFeaturedNum(integer)
- return false if integer is even
- return false if integer is not a multiple of 7
- split the input number into an array of its digits
- iterate through the array of digits
  - return false if the first and last found occurrence of the current digit are not equal
- return true

*/

function featured(int) {
  if (int === 9876543201) return "There is no possible number that fulfills those requirements.";

  for (let checkNum = int + 1; checkNum <= 9876543201; checkNum += 1) {
    if (isFeaturedNum(checkNum)) return checkNum;
  }
}

function isFeaturedNum(int) {
  if ((int % 2 === 0) || (int % 7 !== 0)) return false;
  let digitsArray = int.toString().split('').map(digitStr => parseInt(digitStr, 10));

  for (let i = 0; i < digitsArray.length; i += 1) {
    let firstIndex = digitsArray.indexOf(digitsArray[i]);
    let lastIndex = digitsArray.lastIndexOf(digitsArray[i]);
    if (firstIndex !== lastIndex) return false;
  }

  return true;
}

console.log(featured(0));            // 7
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

// function featured(int) {
//   if (int === 9876543201) return "There is no possible number that fulfills those requirements.";
//   int = nextOddMultipleOf7(int);

//   for (let checkNum = int; checkNum <= 9876543201; checkNum += 14) {
//     if (allUnique(checkNum)) return checkNum;
//   }
// }

// function nextOddMultipleOf7(int) {
//   while ((int % 2 === 0) || (int % 7 !== 0)) {
//     int += 1;
//   }

//   return int;
// }

// function allUnique(int) {
//   let digitsArray = int.toString().split('');

//   for (let i = 0; i < digitsArray.length; i += 1) {
//     let firstIndex = digitsArray.indexOf(digitsArray[i]);
//     let lastIndex = digitsArray.lastIndexOf(digitsArray[i]);
//     if (firstIndex !== lastIndex) return false;
//   }

//   return true;
// }