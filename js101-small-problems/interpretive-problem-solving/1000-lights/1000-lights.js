// You have a bank of switches before you, numbered from 1 to count.
// Every switch is connected to exactly one light that is initially off.
// You walk down the row of switches and toggle every one of them, that is, you
// flip every switch. All the lights are now on. You walk back to the beginning
// of the row and start another pass. On this second pass, you toggle switches
// 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go
// back to the beginning again, this time toggling switches 3, 6, 9, and so on.
// You continue to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after count passes.

// P
// input: a number (the total number of switches)
// output: an array showing which lights are on after input number of passes

// E
// function lightsOn(switches) {
//   // ...
// }

// lightsOn(5);        // [1, 4]
// // Detailed result of each round for `5` lights
// // Round 1: all lights are on
// // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// D
// input: number (number of switches / number of passes)
// output: array

// A
// 1. declare a pass variable = 1
// 2. declare an array consisting of input number of booleans
// 2. start a loop that ends when pass = input
//    1. map the array to a new array, toggling whichever indices are multiples
//       of pass
//    2. increment pass by 1
// 3. return the array with every false element filtered out (map true indexes to new array)

// C
function lightsOn(count) {
  let lightsArray = [...Array(count)].fill(true); // initialization & pass 1
  let result = [];
  let pass = 2;

  while (pass <= count) {
    lightsArray = lightsArray.map((light, idx) => {
      let currentIdx = idx + 1; // 1-based indexing

      if ((currentIdx % pass) === 0) {
        return !light;
      } else {
        return light;
      }
    });

    pass += 1;
  }

  lightsArray.forEach((light, idx) => {
    if (light) result.push(idx + 1);
  });

  return result;
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]