// Write a function that takes a year as input and returns the century.
// The return value should be a string that begins with the century number,
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// P
// input: a year
// output: which century the input is in

// E
// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

// D
// input: number
// output: string

// A
// 1. define a function named "century" with one parameter "year".
// 2. declare a variable "yearString".
// 3. declare a variable "centuryStart" initialized to 1.
// 4. declare a variable "centuryEnd" initialized to 100.
// 5. declare a variable "currentCentury" initialized to 1.
// 6. start an infinite loop
//    1. check if `year` is between `centuryStart` and `centuryEnd`.
//    2. if it is, set `yearString` to the value of `currentCentury` and break.
//    3. if it is not, increment `centuryStart` and `centuryEnd` by 100.
//    4. increment `currentCentury` by 1.
// 7. return `yearString` + the appropriate string ending

// C
function century(year) {
  let centuryStart = 1;
  let centuryEnd = 100;
  let currentCentury = 1;
  let century;

  while (true) {
    if (year >= centuryStart && year <= centuryEnd) {
      century = currentCentury;
      break;
    }

    centuryStart += 100;
    centuryEnd += 100;
    currentCentury += 1;
  }

  return determineSuffix(century);
}

function determineSuffix(century) {
  let centuryString = String(century);

  if (centuryString.endsWith('11')) return centuryString + 'th';
  if (centuryString.endsWith('12')) return centuryString + 'th';
  if (centuryString.endsWith('13')) return centuryString + 'th';
  if (centuryString.endsWith('1')) return centuryString + 'st';
  if (centuryString.endsWith('2')) return centuryString + 'nd';
  if (centuryString.endsWith('3')) return centuryString + 'rd';

  return centuryString + 'th';
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"