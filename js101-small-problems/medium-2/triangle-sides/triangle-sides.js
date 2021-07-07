// Write a function that takes the lengths of the three sides of a triangle as
// arguments and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// P
// input: 3 numbers representing the side lengths of a triangle
// output: the triangle classification as a string
// rules: valid triangle = (sum of 2 shortest sides > longest side) and (every
//                         side > 0)
//        equilateral = 3 sides equal
//        isosceles = 2 sides equal, 3rd different
//        scalene = 3 sides different

// E
// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"

// D
// input: three numbers
// output: string

// A
// 1. declare an array consisting of the three inputs
// 2. sort this array numerically
// 3. declare a "shortest", "middle", "longest" variable set to the array elements, first index to last.
// 4. determine the classification using conditionals
//    1. if the shortest side is greater than 0 AND (shortest + middle > longest), continue
//       1. if all 3 variables are equal, return 'equilateral'.
//       2. if all 3 sides are not equal, return 'scalene'.
//       3. return 'isosceles'.
//    2. otherwise return 'invalid'.

// C
function triangle(side1, side2, side3) {
  let sidesArr = [side1, side2, side3].sort((a, b) => a - b);
  
  let shortest = sidesArr[0];
  let middle = sidesArr[1];
  let longest = sidesArr[2];

  if (shortest > 0 && (shortest + middle) > longest) {
    if (shortest === middle && middle === longest) return 'equilateral';
    if (shortest !== middle && middle !== longest && shortest !== longest) {
      return 'scalene';
    }
    return 'isosceles';
  }

  return 'invalid';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"