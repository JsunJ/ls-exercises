/*

P: given a year greater than 1752, find the number of 'Friday the 13ths' in it

input:
- a year > 1752
  - integer

output:
- number of found Friday the 13ths

E:

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

D:

input:
- integer (year)

output:
- integer (count)

A:

- initialize a date object
- initialize a count
- iterate over all months of the input year
  - for each month, set the date to (inputYear, currentMonth, 13)
  - if the day in the date is friday, increment a count
- return the count

*/

function fridayThe13ths(year) {
  let fullDate = new Date();
  let count = 0;

  for (let month = 0; month < 12; month += 1) {
    fullDate.setFullYear(year, month, 13);
    if (fullDate.getDay() === 5) {
      count += 1;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2