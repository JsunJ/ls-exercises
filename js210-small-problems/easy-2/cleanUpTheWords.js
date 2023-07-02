function cleanUp(string) {
  string = string.replace(/[^a-z]/ig, ' ');
  string = string.replace(/(\s)\1+/g, ' ');

  return string;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "