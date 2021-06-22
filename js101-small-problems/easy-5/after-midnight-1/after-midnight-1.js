// The time of day can be represented as the number of minutes before or after
// midnight. If the number of minutes is positive, the time is after midnight.
// If the number is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns
// the time of day in 24 hour format (hh:mm). Your function should work with any
// integer input.

// P
// input: an integer representing the time of day
// output: a string representing the corresponding time of day in 24 hour format
// explicit reqs: you may not use javascript's Date class methods.
// implicit reqs: the input can be positive, negative or 0

// E
// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// D
// input: number (integer)
// output: string (24 hour time)

// A
// 1. Ensure the time difference is in the range between 0 and MINUTES_PER_DAY
//    by using the % operator. For negative numbers we need to add MINUTES_PER_DAY
//    to the remainder.
// 2. Calculate the hours and minutes.
// 3. Return the formatted string.

// C
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");