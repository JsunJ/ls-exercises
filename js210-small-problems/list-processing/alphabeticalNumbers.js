function alphabeticNumberSort(arr) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return arr.map(num => NUMBER_WORDS[num])
            .sort()
            .map(word => NUMBER_WORDS.indexOf(word));
}