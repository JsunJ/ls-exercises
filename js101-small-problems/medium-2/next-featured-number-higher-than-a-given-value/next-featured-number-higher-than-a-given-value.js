// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there
// is no next featured number.

// P
// input: an integer
// output: the next featured number greater than the input
// rules: featured number = ODD number that is a multiple of 7 and all digits
//                          occuring exactly once each

// E
// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirements."

// D
// input: number
// output: number or error string

// A
// determine if number is a featured number
// 1. check if number is odd
// 2. check if number is a multiple of 7
// 3. check if all digits in the number occur exactly one time (loop)
// 4. return true if all pass, false if any individual does not pass

// find next highest featured number
// 1. start a loop that stops at the maximum possible featured number
//    1. increment the input by 1
//    2. check if the new input is a featured number
//    3. return the new input if so
// 2. return error string

// C
function isFeatured(integer) {
  if (integer % 2 === 0) return false;
  if (integer % 7 !== 0) return false;
  
  let intString = String(integer);

  for (let i = 0; i < intString.length; i++) {
    let currentDigit = intString[i];
    let regex = new RegExp(currentDigit, 'g');
    let currentDigitArray = intString.match(regex);

    if (currentDigitArray.length > 1) return false;
  }
  
  return true;
}

function featured(integer) {
  const MAX_FEATURED = 9876543201
  while (integer <= MAX_FEATURED) {
    integer += 1;
    if (isFeatured(integer)) return integer;  
  }

  return 'There is no possible number that fulfills those requirements.';
}

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