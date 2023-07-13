/*

P: given 3 degree values (integers) representing triangle angles, determine what classification the triangle is

input:
- numbers (integers)

output:
- string
  'right'
  'acute'
  'obtuse'
  'invalid'

rules:
  - right: one angle = 90 degrees
  - acute: all 3 angles < 90 degrees
  - obtuse: one angle > 90 degrees
  - valid: sum(3 angles) = 180 degrees AND all 3 angles > 0

E:

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

D:

input:
- integer (angle)
  - place angles in array for array methods

output
- string (classification)

A:

- initialize an array of the 3 argument integers
- return 'invalid' if sum(3 integers) does not equal 180 OR any integer is <= 0
- return 'right' if any of the 3 integers is 90
- return 'obtuse' if any of the 3 integers is greater than 90
- return 'acute'


*/

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (angles.reduce((sum, angle) => sum + angle) !== 180 || angles.some(angle => angle <= 0)) {
    return 'invalid';
  }

  if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"