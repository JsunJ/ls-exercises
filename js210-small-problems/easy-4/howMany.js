function countOccurrences(arr) {
  let occurrences = {};

  arr.forEach(elem => {
    occurrences[elem] = occurrences[elem] + 1 || 1
  });

  Object.keys(occurrences).forEach(key => console.log(`${key} => ${occurrences[key]}`));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2