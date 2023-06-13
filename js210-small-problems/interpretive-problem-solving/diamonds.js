/*

P: given an integer `n`, display a four-pointed diamond in a `n` x `n` grid

Input:
- integer `n` (always odd)
  - represents the size of the diamond
  - `n` represents the number of lines
  - `n` represents the width of the longest line (in the middle of the diamond)

Output:
- `n` x `n` grid of asterisks (multi-line string of `*`'s arranged as a diamond)
  - printed output, no return / irrelevant return value

Explicit Reqs:
- input integer will always be odd (has a midpoint)

Implicit Reqs:
- input of `0` or negative displays nothing (empty string)
- each line is made up of asterisks
- the middle line is exactly `n` number of asterisks with nothing else
- the lines above and below the middle line have a decreasing number of
  asterisks and be prepended by spaces

E:

diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

diamond(>0, -1, '', etc.<)
// logs
''

diamond();
// logs
''

A:

- create the top part of the diamond
  - declare `spaces` and `asterisks` to track each respepctive count to add
  - loop from 1 (the first line) to (`n` / 2) - 1 (half of the diamond minus the
    middle row)
    - add `spaces` ((`n` / 2) - 1) spaces to the current line
    - subtract 1 from `spaces`
    - add `asterisks` (1) asterisks to the current line
    - add 2 to `asterisks`
    - add newline

- create the middle line of the diamond
  - add `n` asterisks to the current line

- create the bottom part of the diamond
  - declare `spaces` and `asterisks` to track each respepctive count to add
  - loop from 1 (the first line below the middle line) to (`n` / 2) - 1 (half of
    the diamond minus the middle row)
    - add newline
    - add `spaces` (1) spaces to the current line
    - add 1 to `spaces`
    - add `asterisks` (`n` - 2) asterisks to the current line
    - subtract 2 from `asterisks`

- log `diamondTop` + `middleLine` + `diamondBottom`

*/

function diamond(integer) {
  if (!integer || !Number.isInteger(integer)) console.log('Invalid Input');
  if (integer <= 0) console.log('Input must be odd.');

  if (integer === 1) {
    console.log('*');
    return undefined;
  }

  let middleLine = '*'.repeat(integer);

  console.log(diamondTop(integer) + middleLine + diamondBottom(integer));

  return undefined;
}

function diamondTop(integer) {
  let spaces = (integer - 1) / 2;
  let asterisks = 1;
  let result = '';

  for (let line = 0; line <= ((integer / 2) - 1); line += 1) {
    result += ' '.repeat(spaces);
    spaces -= 1;
    result += '*'.repeat(asterisks);
    asterisks += 2;
    result += '\n';
  }

  return result;
}

function diamondBottom(integer) {
  let spaces = 1;
  let asterisks = integer - 2;
  let result = '';

  for (let line = 0; line <= ((integer / 2) - 1); line += 1) {
    result += '\n';
    result += ' '.repeat(spaces);
    spaces += 1;
    result += '*'.repeat(asterisks);
    asterisks -= 2;
  }

  return result;
}

diamond(1);
diamond(3);
diamond(9);