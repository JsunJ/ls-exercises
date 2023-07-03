function genTeddyAge() {
  let age = Math.floor(Math.random() * (200 - 20 + 1) + 20);
  console.log(`Teddy is ${age} years old!`);
}

genTeddyAge();

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }