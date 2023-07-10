function wordToDigit(string) {
  const DIGIT_MAP = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  Object.keys(DIGIT_MAP).forEach(numWord => {
    let regex = new RegExp('\\b' + numWord + '\\b', 'g');
    string = string.replace(regex, DIGIT_MAP[numWord]);
  });

  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."