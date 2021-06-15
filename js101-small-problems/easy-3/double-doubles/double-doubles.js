// Write a function that returns the number provided as an argument multiplied
// by two, unless the argument is a double number; otherwise, return the double
// number as-is.

// P
// input: number
// output: input multiplied by 2
//         if input is a double number, return the number as-is
// implicit: inputs will always be positive whole numbers

// E
// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

// D
// input: number
// output: number

// A
// 1. define a function named "twice" with one parameter "num".
// 2. convert `num` to string and save to "stringOfNum".
// 3. determine the length of `stringOfNum` and save to "stringLength"
// 4. compare the first half of `stringOfNum` to the second half of `stringOfNum`.
//    1. if they are identical, return `num`.
//    2. if they are not identical, return `num` * 2.

// C
function twice(num) {
  let stringNum = num.toString();
  let halfLength = (stringNum.length / 2);

  if (stringNum.slice(0, halfLength) === stringNum.slice(halfLength)) {
    return num;
  } else {
    return (num * 2);
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676