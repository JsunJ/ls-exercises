function isStringArray(arr: unknown[]): arr is string[] {
  return arr.every((item) => typeof item === "string");
}

console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(["test", "string"]));