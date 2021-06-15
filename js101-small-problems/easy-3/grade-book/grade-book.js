// Write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter associated with that grade.

// P
// input: 3 numbers
// output: a corresponding letter grade for the average of the input numbers
// explicit: 3 input numbers are all between 0 and 100.

// E
// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

// D
// input: number
// output: string

// A
// 1. define a function named "getGrade" with 3 parameters "num1, num2 and num3".
// 2. add `num1`, `num2` and `num3` then divide the value by 3. set this value to "avg".
// 3. determine where `avg` falls on the numerical score letter grade list
// 4. output the appropriate letter grade

// C
function getGrade(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;

  if (avg >= 90) return 'A';
  if (avg >= 80 && avg < 90) return 'B';
  if (avg >= 70 && avg < 80) return 'C';
  if (avg >= 60 && avg < 70) return 'D';
  if (avg < 60) return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"