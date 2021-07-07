// Write a function that takes a year as an argument and returns the number of
// Friday the 13ths in that year. You may assume that the year is greater than
// 1752, which is when the United Kingdom adopted the modern Gregorian Calendar.
// You may also assume that the same calendar will remain in use for the
// foreseeable future.

// A
// 1. Iterate over all the months of the given year.
// 2. For each month, get the day that falls on the 13th.
// 3. Count the 13ths that fall on a Friday.
// 4. Return the count.

// C
function fridayThe13ths(year) {
  let thirteenths = [];
  const friday = 5;

  for (let month = 0; month <= 11; month += 1) {
    thirteenths.push(new Date(year, month, 13))
  }

  return thirteenths.filter(month => month.getDay() === friday).length;
}