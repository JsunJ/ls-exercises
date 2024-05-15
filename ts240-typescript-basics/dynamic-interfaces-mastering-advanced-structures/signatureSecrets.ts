interface StringMap {
  [key: string]: string;
}

const dictionary: StringMap = {
  hello: "world",
  goodbye: "moon",
};

// No direct output; dictionary validates the StringMap interface

// const dictionary: Record<string, string> = {
//   hello: "world",
//   goodbye: "moon",
// };