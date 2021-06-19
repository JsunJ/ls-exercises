// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string representing that angle in
// degrees, minutes, and seconds. You should use a degree symbol (˚) to
// represent degrees, a single quote (') to represent minutes, and a double
// quote (") to represent seconds. There are 60 minutes in a degree, and 60
// seconds in a minute.

// P
// input: a floating point number representing an angle between 0 and 360 degrees
// output: a string representing the input in degrees, minutes, and seconds
// explicit reqs: use a degree symbol ˚ to represent degrees
//                use a single quote ' to represent minutes
//                use a double quote " to represent seconds
// implicit reqs:

// E
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// D
// input: number (float)
// output: string

// A
// 1. define a function named "dms" with a single parameter "angle".
// 2. declare a variable "degrees" initialized to the value of `angle` floored.
// 3. declare a variable "minutes" initialized to the value of `angle` minus
//    `degrees` multiplied by 60.
// 4. declare a variable "seconds" intialized to the value of ((`angle` minus
//    `degrees`) minus (`minutes` divided by 60)) * 60.
// 5. return a string containing `degrees` + the degree symbol 
//                               + `minutes` + "'"
//                               + `seconds` + '"'

// C
function dms (angle) {
  let degrees = Math.floor(angle);
  let minutes = Math.floor((angle - degrees) * 60);
  let seconds = Math.floor((angle - degrees - (minutes / 60)) * 60);

  return String(degrees) + '˚' + padZeroes(minutes) + "'"
                               + padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"