function getGrade(score1, score2, score3) {
  let mean = (score1 + score2 + score3) / 3;

  if (mean < 60) {
    return 'F';
  } else if (mean < 70) {
    return 'D';
  } else if (mean < 80) {
    return 'C';
  } else if (mean < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(70, 70, 70));    // "C"