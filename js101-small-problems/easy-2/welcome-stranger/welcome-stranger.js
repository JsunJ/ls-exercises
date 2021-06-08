// Create a function that takes 2 arguments, an array and an object. 
// The array will contain 2 or more elements that, when combined with adjoining spaces, 
// will produce a person's name. The object will contain two keys, "title" and "occupation", 
// and the appropriate values. 
// Your function should return a greeting that uses the person's full name, and mentions the person's title.

// ## Understand the Problem
// - Input : array containing 2 or more "name" elements, object containing "title" and "occupation" keys
// - Output : greeting containing full name and full title
// - Explicit Requirements :
// 	- array must contain 2 or more elements
//   - when array elements are combined with adjoining spaces they form full name
//   - object contains 2 keys, "title" and "occupation" with matching values
// - Implicit Requirements :
// 	- array elements are strings
//   - object values are strings
//   - output is a string
// - Other Rules :
// 	- ...

// ## Examples / Test Cases
// ```
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.
// ```

// ## Data Structure
// - Input : array of strings, object containing 2 keys with 2 string values
// - Output : string
// - Other :
// 	- ...

// ## Algorithm
// 1. define a function named "greetings" with 2 parameters "array" and "object"
// 2. inside `greetings()`, declare a variable named "fullName" initialized to an empty string.
// 3. declare another variable named "fullTitle" initialized to an empty string.
// 4. concatenate each element in the array argument together with adjoining spaces between and assign this value to `fullName`.
// 5. concatenate the first and second key values of the object argument together with an ajoining space between and assign this value to `fullTitle`.
// 6. return the string "Hello, `fullName`! Nice to have a `fullTitle` around."


function greetings(array, object) {
  let fullName = '';
  let fullTitle = '';

  fullName = array.join(' ');
  fullTitle = object.title + ' ' + object.occupation;

  return `Hello, ${fullName}! Nice to have a ${fullTitle} around.`
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.