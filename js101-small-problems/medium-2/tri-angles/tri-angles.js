// Write a function that takes the three angles of a triangle as arguments and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// P
// input: 3 angles of a triangle (numbers)
// output: the triangle classification (string)
// rules: valid triangle = sum of angles is exactly 180, and each angle > 0
//        right triangle = one angle is exactly 90
//        acute triangle = all 3 angles < 90
//        obtuse triangle = one angle > 90

// E
// triangle(60, 70, 50);       // "acute"
// triangle(30, 90, 60);       // "right"
// triangle(120, 50, 10);      // "obtuse"
// triangle(0, 90, 90);        // "invalid"
// triangle(50, 50, 50);       // "invalid"

// D
// input: number
// output: string

// A
// 1. create an array of the 3 input angles
// 2. determine if triangle is valid
//    1. loop through the array of input angles
//       1. if the current angle is 90 return 'right'
//       2. if the current angle is > 90 return 'obtuse'
//    2. return 'acute'
// 3. return 'invalid'

// determine if triangle is valid
// 1. loop through the array of input angles
// 2. add each angle together, return false if the sum is not 180 or if any angle
//    is less than 0

// C
function isValid(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) return false;
    sum += arr[i];
  }
  return sum === 180;
}

function triangle(angle1, angle2, angle3) {
  let anglesArr = [angle1, angle2, angle3];

  if (isValid(anglesArr)) {
    for (let i = 0; i < anglesArr.length; i++) {
      let currentAngle = anglesArr[i];
      if (currentAngle === 90) return 'right';
      if (currentAngle > 90) return 'obtuse';
    }
    return 'acute';
  }
  return 'invalid';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"