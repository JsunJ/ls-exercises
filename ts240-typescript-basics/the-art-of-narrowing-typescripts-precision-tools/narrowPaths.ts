function printLength(element: string | string[]): void {
  if (typeof element === "string") {
    console.log(`String length: ${element.length}`);
  } else {
    console.log(`Array count: ${element.length}`);
  }
}

printLength("hello");
printLength(["hello", "world"]);