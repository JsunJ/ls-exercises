function centerOf(str) {
  const length = str.length;

  if (length % 2 === 0) {
    return str.slice(length / 2 - 1, length / 2 + 1);
  } else {
    return str.slice(length / 2, length / 2 + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"