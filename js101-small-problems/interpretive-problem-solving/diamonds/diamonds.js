// Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function.
// You may assume that the argument will always be an odd integer.

// P
// input: an odd integer
// output: a four-pointed diamond in a input x input grid

// E
// diamond(1);
// logs
// *

// diamond(3);
// // logs
//  *
// ***
//  *

// diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// D
// input: number
// output: printed diamond

// A
// 1. initialize increment to 2
// 2. Start with the first number, 1, incrementing the number by increment with each step
// 3. When the number is equal to n, flip the increment to -2
// 4. Stop when we get to a negative number

// 1. for each number in the sequence
//    1. log (n - number) / 2 spaces PLUS number asterisks

// C
function diamond(num) {
  let sequence = diamondSequence(num);

  sequence.forEach(seqNum => {
    if (seqNum === sequence[0] || seqNum === sequence[sequence.length - 1]) {
      console.log(`${' '.repeat((num - seqNum) / 2)}*`);
    } else {
      let midSpaces = seqNum - 2;
      console.log(`${' '.repeat((num - seqNum) / 2)}*${' '.repeat(midSpaces)}*`);
    }
  });
}

function diamondSequence(num) {
  let increment = 2;
  let sequence = [];
  let pushNum = 1;
  
  for (let i = 1; i <= num; i++) {
    if (pushNum === num) {
      sequence.push(pushNum);
      increment = -2;
      pushNum += increment;
    } else {
      sequence.push(pushNum);
      pushNum += increment;
    }
  }

  return sequence;
}

diamond(1);
diamond(3);
diamond(9);