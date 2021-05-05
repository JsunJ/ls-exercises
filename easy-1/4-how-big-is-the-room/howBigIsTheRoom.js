const readline = require('readline-sync');

const SQUARE_FEET_RATIO = 10.7639;

console.log('Enter the length of the room in meters:');
let roomLength = parseFloat(readline.question());
console.log('Enter the width of the room in meters:');
let roomWidth = parseFloat(readline.question());

let areaInSquareMeters = roomLength * roomWidth;
let areaInSquareFeet = areaInSquareMeters * SQUARE_FEET_RATIO;

console.log(`The area of the room is ${areaInSquareMeters.toFixed(2)} square meters (${areaInSquareFeet.toFixed(2)} square feet).`);