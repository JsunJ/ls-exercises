/*

You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

P: given a number n representing the number of light switches -- all off from the start -- find out which switches are on after passing through them n times and toggling them according to the specified pattern on each pass

input:
- number 'n' representing the total number of switches
  - cannot be 0?
  - cannot be 1?
  - cannot be negative?
  - integer

output:
- an array of lights that are on
  - do not include lights that are off

explicit:
- a switch = a light
- switches start 'off'
- switches numbered from 1 to 'n'
- a pass = interate through all switches
  - 1st pass: toggle all switches (all now on)
  - 2nd pass: toggle 2, 4, 6 ...
  - 3rd pass: toggle 3, 6, 9 ...
  - 4th pass: toggle 4, 8, 12 ...
- stop after passing after 'n' passes

E:

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
lightsOn(2); [1, 2] --> [1]

D:

input:
- number (number of switches/lights)
  - turn into map of 'n' booleans

output:
- array of booleanMap keys which = true

A:

- create a map of switch:boolean pairs all equal to false
  - (1: false
     2: false
     3: false
     4: false
     ...)
- loop from 1 to 'n' (pass variable)
  - loop through the keys of the map
    - if current key is a multiple of pass, toggle key value
  - increment pass by 1
- return the keys of the map which have a true value
*/

function lightsOn(switches) {
  let switchBank = {}
  let switchCount = 1;
  let pass = 1;

  while (switchCount <= switches) {
    switchBank[switchCount] = false;
    switchCount += 1;
  }

  while (pass <= switches) {
    Object.keys(switchBank).forEach(key => {
      if (key % pass === 0) {
        switchBank[key] = !switchBank[key];
      }
    });

    pass += 1;
  }

  return Object.keys(switchBank).filter(key => {
    return switchBank[key] === true;
  }).map(value => parseInt(value, 10));
}

console.log(lightsOn(2)); // [1]
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]