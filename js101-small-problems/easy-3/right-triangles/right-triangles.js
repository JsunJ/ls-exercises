// Write a function that takes a positive integer, n, as an argument and logs a
// right triangle whose sides each have n stars. The hypotenuse of the triangle
// (the diagonal side) should have one end at the lower-left of the triangle,
// and the other end at the upper-right.

// P
// input: a positive integer, n
// output: a triangle whose sides each have n stars
// implicit: the input will always be a positive integer

// E
// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// D
// input: number
// output: string

// A
// 1. define a function named "triangle" with one parameter "n".
// 2. declare a variable "counter" initialized to 1.
// 3. declare a variable "whiteSpace" initialized to ''.
// 4. declare a variable "stars" initialized to ''.
// 5. start a loop from `counter` to `n`.
//    1. set whitespace equal to `n - counter` whitespaces.
//    1. set stars equal to `counter` stars.
//    3. log `whitespace` + `stars` to the console.
//    4. increment counter by 1

// C
function triangle(n) {
  let whitespace = '';
  let stars = ''
  let counter = 1;

  while (counter <= n) {
    whitespace = ' '.repeat(n - counter);
    stars = '*'.repeat(counter);
    console.log(`${whitespace}${stars}`);
    counter++;
  }
}

triangle(5);
triangle(9);