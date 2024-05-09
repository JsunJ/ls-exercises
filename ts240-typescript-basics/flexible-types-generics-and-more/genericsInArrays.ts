function filterByType<T>(arr: any[], type: string): T[] {
  return arr.filter((item) => typeof item === type);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"));