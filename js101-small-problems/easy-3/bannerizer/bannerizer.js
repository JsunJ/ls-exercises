// Write a function that will take a short line of text, and write it to the
// console log within a box.

// P
// input: string
// output: the input within a box
// explicit: the output will always fit in your browser window

// E
// logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// D
// input: string
// output: string

// A
// 1. define a function named "logInBox" with one parameter "text".
// 2. declare a variable "emptySpaces"
// 3. set `emptySpaces` to as many whitespaces as there are characters in `text`.
// 4. declare a variable "extraBorder"
// 5. set `extraBorder` to as many '-'s as there are characters in `text`.
// 6. log to the console a box with `text` centered in it.

// C
function logInBox(text) {
  let emptySpaces = ' '.repeat(text.length);
  let extraBorder = '-'.repeat(text.length);
  console.log(`+-${extraBorder}-+`);
  console.log(`| ${emptySpaces} |`);
  console.log(`| ${text} |`);
  console.log(`| ${emptySpaces} |`);
  console.log(`+-${extraBorder}-+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('Hello');
logInBox('');