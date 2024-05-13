function logUnknown(value: unknown): void {
  if (typeof value === "string") {
    console.log(value);
  }
}

logUnknown("This is a string");
// Logs "This is a string"
logUnknown(42);
// Does not log