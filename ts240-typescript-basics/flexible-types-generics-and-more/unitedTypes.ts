function wrapInArray(value: string | number): Array<string | number> {
  return [value];
}

console.log(wrapInArray("hello"));
console.log(wrapInArray(100));