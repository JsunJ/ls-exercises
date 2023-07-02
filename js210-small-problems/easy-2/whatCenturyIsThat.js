/*

input: integer
output: string depicting the century
  - appended with proper ending
    - 1? st
    - 2? nd
    - 3? rd
    - 4 through 9 and 0? th
      - exception: 11 through 13? th

  - new centuries begin in years that end with 01
    - 1901 through 2000 = 20th century

A:
- determine how many times 100 can go into the year
  - if no remainder, that is your century
  - if remainder, add 1 to get the century
- apply the century-end rules to get the proper ending
- build and return the century + ending as a string

*/

function century(year) {
  let centuryNum = Math.ceil(year / 100);
  let centuryStr = centuryNum.toString();

  let suffix = determineSuffix(centuryStr);
  return centuryStr.concat(suffix);
}

function determineSuffix(century) {
  if (century.endsWith('11')) return 'th';
  if (century.endsWith('12')) return 'th';
  if (century.endsWith('13')) return 'th';

  if (century.endsWith('1')) {
    return 'st';
  } else if (century.endsWith('2')) {
    return 'nd';
  } else if (century.endsWith('3')) {
    return 'rd';
  } else {
    return 'th';
  }
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