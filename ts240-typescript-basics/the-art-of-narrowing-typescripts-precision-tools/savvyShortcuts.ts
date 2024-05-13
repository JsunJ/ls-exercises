function checkInput(input: string | undefined): void {
  // Use short-circuiting with the logical AND operator
  input && input !== "" && console.log("Input is defined and not empty");
}