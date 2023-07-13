/*

P: given 3 number lengths representing side lengths, determine what classification the triangle is

input:
- number (integer or float)

output:
- string
  'equilateral'
  'isosceles'
  'scalene'
  'invalid'

rules:
- equilateral: all 3 nums must be equal
- isosceles: two nums are equal AND 3rd is different
- scalene: all 3 nums must be different
- valid: sum(2 smallest nums) > largest num AND all 3 nums are not 0

E:

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

D:

input:
- number (three)
  - place into array (for sorting & indexing)

output
- string (classification)

A:

- initialize an array of the 3 given numbers
  - sort the array ascending
- determine if invalid (helper?)
  - return "invalid"
- apply classification rule checks 1 at a time
  - return corresponding classification string if matched

*/

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort();
  if (sides.some(side => side === 0) || (sides[0] + sides[1]) <= sides[2]) return 'invalid';

  if (sides.every(side => side === sides[0])) {
    return 'equilateral';
  } else if (sides[0] !== sides[1] && sides[1] !== sides[2] && sides[0] !== sides[2]) {
    return 'scalene'
  } else {
    return 'isosceles';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"